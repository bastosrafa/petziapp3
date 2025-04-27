import React, { useState } from 'react';
import { useReferrerContext } from '@/hooks/useReferrerContext';
import { Button } from '@/shadcn/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shadcn/components/ui/card';
import { Input } from '@/shadcn/components/ui/input';
import { CopyIcon, LinkIcon, ShareIcon } from 'lucide-react';
import { useToast } from '@/shadcn/components/ui/use-toast';

export default function ReferralCode() {
  const { referrerDoc2 } = useReferrerContext();
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  // Se não houver documento de referência, não renderizar nada
  if (!referrerDoc2) return null;

  const referrerId = referrerDoc2.referrerId;
  const successfulReferrals = referrerDoc2.successfulReferrals || 0;
  const totalRevenue = referrerDoc2.totalRevenue || 0;

  // Criar a URL completa para compartilhamento
  const shareUrl = `${window.location.origin}?ref=${referrerId}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast({
        title: "Copiado com sucesso!",
        description: "Link de referência copiado para a área de transferência.",
        variant: "success",
      });
      
      // Resetar o estado de copiado após 2 segundos
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar texto: ', err);
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar o link. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const shareReferralLink = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Meu código de indicação para o Petziapp',
          text: 'Use meu código de indicação para se cadastrar no Petziapp!',
          url: shareUrl,
        });
        
        toast({
          title: "Link compartilhado!",
          description: "Seu link de indicação foi compartilhado com sucesso.",
          variant: "success",
        });
      } else {
        // Fallback para navegadores que não suportam a API de compartilhamento
        copyToClipboard();
      }
    } catch (error) {
      console.error('Erro ao compartilhar: ', error);
      toast({
        title: "Erro ao compartilhar",
        description: "Não foi possível compartilhar o link. Tente copiar manualmente.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <LinkIcon className="mr-2 h-5 w-5 text-brand-primary" />
          Seu Código de Indicação
        </CardTitle>
        <CardDescription>
          Compartilhe o link abaixo com seus amigos e ganhe recompensas quando eles se cadastrarem!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <Input 
              value={shareUrl} 
              readOnly 
              className="bg-muted font-mono text-sm"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={copyToClipboard}
              className={copied ? "text-green-600 border-green-600" : ""}
            >
              <CopyIcon className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="rounded-lg bg-muted p-4 text-center">
              <div className="text-2xl font-bold text-brand-primary">{successfulReferrals}</div>
              <div className="text-sm text-muted-foreground">Indicações bem-sucedidas</div>
            </div>
            <div className="rounded-lg bg-muted p-4 text-center">
              <div className="text-2xl font-bold text-brand-primary">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalRevenue)}
              </div>
              <div className="text-sm text-muted-foreground">Receita gerada</div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={shareReferralLink} className="w-full">
          <ShareIcon className="mr-2 h-4 w-4" />
          Compartilhar Código
        </Button>
      </CardFooter>
    </Card>
  );
} 