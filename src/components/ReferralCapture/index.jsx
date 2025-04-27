import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shadcn/components/ui/card';
import { Input } from '@/shadcn/components/ui/input';
import { Label } from '@/shadcn/components/ui/label';
import { Button } from '@/shadcn/components/ui/button';
import { LinkIcon } from 'lucide-react';
import { useToast } from '@/shadcn/components/ui/use-toast';
import { collection, doc, getDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/config';

export default function ReferralCapture({ onSetReferrer }) {
  const [referralCode, setReferralCode] = useState('');
  const [validating, setValidating] = useState(false);
  const [validated, setValidated] = useState(false);
  const [referrerName, setReferrerName] = useState('');
  const { toast } = useToast();

  // Verificar na URL se existe um código de referência e preenchê-lo automaticamente
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const refCode = urlParams.get('ref');
    
    if (refCode) {
      setReferralCode(refCode);
      validateReferralCode(refCode);
    }
  }, []);

  const validateReferralCode = async (code) => {
    if (!code) return;
    
    setValidating(true);
    try {
      // Consultar a coleção referrals2 para encontrar o documento com este código
      const referralsRef = collection(db, 'referrals2');
      const q = query(referralsRef, where('referrerId', '==', code));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const referralDoc = querySnapshot.docs[0];
        const referrerId = referralDoc.id;
        
        // Buscar o nome do usuário referenciador
        const userDoc = await getDoc(doc(db, 'users', referrerId));
        
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setReferrerName(userData.name || 'Usuário');
          setValidated(true);
          
          // Armazenar o ID do referenciador
          if (onSetReferrer) {
            onSetReferrer(referrerId);
          }
          
          toast({
            title: "Código válido!",
            description: `Você foi indicado por ${userData.name || 'um usuário do Petziapp'}.`,
            variant: "success",
          });
        }
      } else {
        setValidated(false);
        toast({
          title: "Código inválido",
          description: "O código de indicação informado não foi encontrado.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Erro ao validar código de referência:', error);
      toast({
        title: "Erro na validação",
        description: "Ocorreu um erro ao validar o código. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setValidating(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateReferralCode(referralCode);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <LinkIcon className="mr-2 h-5 w-5 text-brand-primary" />
          Código de Indicação
        </CardTitle>
        <CardDescription>
          {validated 
            ? `Você foi indicado por ${referrerName}!` 
            : 'Tem um código de indicação? Digite abaixo para ganhar benefícios exclusivos!'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!validated ? (
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="referralCode">Código de Indicação</Label>
                <div className="flex space-x-2">
                  <Input
                    id="referralCode"
                    placeholder="Ex: ABC12-XYZ"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value)}
                    disabled={validating}
                  />
                  <Button 
                    type="submit" 
                    disabled={!referralCode || validating}
                    size="sm"
                  >
                    {validating ? 'Verificando...' : 'Verificar'}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <div className="bg-muted rounded-lg p-4 text-center">
            <p className="text-green-600 font-semibold">Código validado com sucesso!</p>
            <p className="text-sm text-muted-foreground mt-1">
              Você irá receber benefícios por ter usado um código de indicação.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
} 