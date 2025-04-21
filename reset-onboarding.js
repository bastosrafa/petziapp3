const { initializeApp } = require('firebase/app');
const { getFirestore, deleteDoc, doc, setDoc } = require('firebase/firestore');

// Configuração do Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBnLH-WPXrw6LbXTo6FhHogwjFApEOXIos',
  authDomain: 'petzia-f86b4.firebaseapp.com',
  projectId: 'petzia-f86b4',
  storageBucket: 'petzia-f86b4.firebasestorage.app',
  messagingSenderId: '375896389326',
  appId: '1:375896389326:web:dddf24146bf368fc88029f'
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// UID do usuário
const userId = 'bEKIvt3DtydW7VdVwk90YCwl4Tb2';

// Função para resetar o onboarding
const resetOnboarding = async () => {
  try {
    // Deleta o documento existente se houver
    try {
      await deleteDoc(doc(db, 'onboarding_data', userId));
      console.log('Documento anterior excluído com sucesso');
    } catch (err) {
      console.log('Nenhum documento anterior para excluir ou erro:', err.message);
    }
    
    // Cria um novo documento com completed = false
    await setDoc(doc(db, 'onboarding_data', userId), {
      userId: userId,
      completed: false,
      resetAt: new Date()
    });
    
    console.log('Onboarding resetado com sucesso para o usuário:', userId);
  } catch (error) {
    console.error('Erro ao resetar onboarding:', error);
  }
};

// Também vamos limpar o localStorage relacionado
const clearLocalStorage = () => {
  console.log('Para completar o reset, execute este comando no console do navegador:');
  console.log("localStorage.removeItem('onboarding_progress');");
  console.log("localStorage.removeItem('onboarding_completed');");
};

// Executar o reset
resetOnboarding()
  .then(() => {
    clearLocalStorage();
  })
  .catch(console.error); 