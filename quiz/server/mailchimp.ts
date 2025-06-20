// ATENÇÃO: Nunca deixe a chave exposta em produção! Use sempre a variável de ambiente MAILCHIMP_API_KEY.
// Para testes locais, fallback para a nova chave se a env não estiver definida.

// @ts-ignore - Mailchimp types compatibility
import mailchimp from '@mailchimp/mailchimp_marketing';

const apiKey = process.env.MAILCHIMP_API_KEY;
if (!apiKey) {
  throw new Error('MAILCHIMP_API_KEY environment variable is required');
}
const server = apiKey.split('-')[1] || 'us5';

mailchimp.setConfig({
  apiKey,
  server,
});

export interface LeadData {
  email: string;
  petName: string;
  firstName?: string;
  lastName?: string;
  answers: Record<number, any>;
  diagnosis: {
    behavior: string;
    stimulus: string;
    health: string;
    owner: string;
  };
  quizCompletedAt: string;
  userAgent?: string;
  ipAddress?: string;
}

export async function addLeadToMailchimp(leadData: LeadData) {
  try {
    const listId = process.env.MAILCHIMP_LIST_ID;
    
    if (!listId) {
      throw new Error('MAILCHIMP_LIST_ID not configured');
    }

    // Extract pet and owner insights from answers
    const petInsights = extractPetInsights(leadData.answers);
    const ownerInsights = extractOwnerInsights(leadData.answers);

    // Prepare member data with comprehensive tagging
    const memberData = {
      email_address: leadData.email,
      status: 'subscribed' as const,
      merge_fields: {
        FNAME: leadData.firstName || '',
        LNAME: leadData.lastName || '',
        PETNAME: leadData.petName,
        PETAGE: petInsights.age,
        PETBREED: petInsights.breed,
        PETSIZE: petInsights.size,
        BEHAVIOR: leadData.diagnosis.behavior.substring(0, 100), // Mailchimp field limits
        STIMULUS: leadData.diagnosis.stimulus.substring(0, 100),
        HEALTH: leadData.diagnosis.health.substring(0, 100),
        OWNER: leadData.diagnosis.owner.substring(0, 100),
        QUIZDATE: leadData.quizCompletedAt,
        CONCERNS: petInsights.mainConcerns.join(', ').substring(0, 100),
        TRAINING: ownerInsights.trainingExperience,
        ROUTINE: ownerInsights.hasRoutine ? 'Yes' : 'No',
        ACTIVITY: petInsights.activityLevel,
        URGENCY: petInsights.urgencyLevel
      },
      tags: generateTags(leadData.answers, leadData.diagnosis),
      location: {
        country_code: 'BR'
      }
    };

    // Add member to Mailchimp
    const response = await mailchimp.lists.addListMember(listId, memberData);
    
    console.log(`Lead added to Mailchimp: ${leadData.email}`, {
      id: response.id,
      email: response.email_address,
      status: response.status
    });

    return {
      success: true,
      mailchimpId: response.id,
      status: response.status
    };

  } catch (error: any) {
    console.error('Mailchimp integration error:', error);
    
    // Handle common Mailchimp errors gracefully
    if (error.status === 400 && error.response?.body?.title === 'Member Exists') {
      // Update existing member instead
      try {
        const updateResponse = await updateExistingMember(leadData);
        return updateResponse;
      } catch (updateError) {
        console.error('Failed to update existing member:', updateError);
      }
    }
    
    return {
      success: false,
      error: error.message || 'Unknown Mailchimp error'
    };
  }
}

async function updateExistingMember(leadData: LeadData) {
  const listId = process.env.MAILCHIMP_LIST_ID!;
  const petInsights = extractPetInsights(leadData.answers);
  const ownerInsights = extractOwnerInsights(leadData.answers);

  const updateData = {
    merge_fields: {
      PETNAME: leadData.petName,
      PETAGE: petInsights.age,
      PETBREED: petInsights.breed,
      BEHAVIOR: leadData.diagnosis.behavior.substring(0, 100),
      STIMULUS: leadData.diagnosis.stimulus.substring(0, 100),
      HEALTH: leadData.diagnosis.health.substring(0, 100),
      OWNER: leadData.diagnosis.owner.substring(0, 100),
      QUIZDATE: leadData.quizCompletedAt,
      CONCERNS: petInsights.mainConcerns.join(', ').substring(0, 100),
      TRAINING: ownerInsights.trainingExperience,
      ROUTINE: ownerInsights.hasRoutine ? 'Yes' : 'No',
    },
    tags: generateTags(leadData.answers, leadData.diagnosis)
  };

  const response = await mailchimp.lists.updateListMember(
    listId,
    mailchimp.utils.md5(leadData.email.toLowerCase()),
    updateData
  );

  return {
    success: true,
    mailchimpId: response.id,
    status: 'updated'
  };
}

function extractPetInsights(answers: Record<number, any>) {
  return {
    age: answers[3] || 'Not specified',
    breed: answers[2] || 'Not specified', 
    size: answers[1] || 'Not specified',
    activityLevel: determineActivityLevel(answers),
    mainConcerns: extractMainConcerns(answers),
    urgencyLevel: determineUrgencyLevel(answers)
  };
}

function extractOwnerInsights(answers: Record<number, any>) {
  return {
    trainingExperience: answers[4] || 'Not specified',
    hasRoutine: answers[10] === 'Sim, seguimos uma rotina bem definida' || answers[10] === 'Sim, temos alguns hábitos',
    timeAvailable: answers[17] || 'Not specified',
    livingSpace: answers[16] || 'Not specified'
  };
}

function determineActivityLevel(answers: Record<number, any>): string {
  const exerciseFreq = answers[11];
  if (exerciseFreq === 'Mais de 2 horas por dia') return 'High';
  if (exerciseFreq === '1-2 horas por dia') return 'Medium';
  if (exerciseFreq === '30 minutos a 1 hora') return 'Low';
  return 'Very Low';
}

function extractMainConcerns(answers: Record<number, any>): string[] {
  const concerns = [];
  
  if (answers[5]) concerns.push('Destructive');
  if (answers[6]) concerns.push('Anxiety');
  if (answers[7]) concerns.push('Aggression');
  if (answers[8] === 'Não, ignora completamente') concerns.push('Disobedience');
  if (answers[9]) concerns.push('Toilet_Training');
  if (answers[12]) concerns.push('Health_Issues');
  
  return concerns;
}

function determineUrgencyLevel(answers: Record<number, any>): string {
  const destructive = answers[5];
  const aggression = answers[7];
  const health = answers[12];
  
  if (aggression || health) return 'High';
  if (destructive) return 'Medium';
  return 'Low';
}

function generateTags(answers: Record<number, any>, diagnosis: any): string[] {
  const tags = ['quiz_completed', 'petzia_lead'];
  
  // Pet characteristics tags
  const age = answers[3];
  if (age) tags.push(`pet_${age.toLowerCase().replace(' ', '_')}`);
  
  const size = answers[1];
  if (size) tags.push(`size_${size.toLowerCase()}`);
  
  // Behavior tags
  if (answers[5]) tags.push('destructive_behavior');
  if (answers[6]) tags.push('separation_anxiety');
  if (answers[7]) tags.push('aggressive_behavior');
  if (answers[8] === 'Não, ignora completamente') tags.push('disobedient');
  if (answers[9]) tags.push('toilet_issues');
  
  // Owner experience tags
  const experience = answers[4];
  if (experience === 'Primeira vez com um cão') tags.push('first_time_owner');
  if (experience === 'Tenho alguma experiência') tags.push('some_experience');
  if (experience === 'Sou muito experiente') tags.push('experienced_owner');
  
  // Urgency tags
  const urgency = determineUrgencyLevel(answers);
  tags.push(`urgency_${urgency.toLowerCase()}`);
  
  // Activity level tags
  const activity = determineActivityLevel(answers);
  tags.push(`activity_${activity.toLowerCase()}`);
  
  return tags;
}

export async function testMailchimpConnection() {
  try {
    const response = await mailchimp.ping.get();
    console.log('Mailchimp connection successful:', response);
    return { success: true, message: 'Connected to Mailchimp' };
  } catch (error: any) {
    console.error('Mailchimp connection failed:', error);
    return { success: false, error: error.message };
  }
}