import React from 'react';
import Button from '@/components/ui/Button';
import { Bell, Settings, User, HelpCircle } from 'lucide-react';
import './styles.css';

const Test = () => {
  return (
    <div className="test-container">
      <h1>Teste de Componentes UI</h1>
      
      <section className="test-section">
        <h2>Botões com Feedback Visual</h2>
        <div className="button-group">
          <Button 
            variant="primary"
            tooltip="Botão primário com tooltip"
          >
            Botão Primário
          </Button>
          
          <Button 
            variant="secondary"
            tooltip="Botão secundário com tooltip"
          >
            Botão Secundário
          </Button>
          
          <Button 
            variant="ghost"
            tooltip="Botão ghost com tooltip"
          >
            Botão Ghost
          </Button>
        </div>
      </section>

      <section className="test-section">
        <h2>Botões com Ícones</h2>
        <div className="button-group">
          <Button 
            variant="primary"
            icon={<Bell />}
            tooltip="Notificações"
          >
            Notificações
          </Button>
          
          <Button 
            variant="secondary"
            icon={<Settings />}
            tooltip="Configurações"
          >
            Configurações
          </Button>
          
          <Button 
            variant="ghost"
            icon={<User />}
            tooltip="Perfil"
          >
            Perfil
          </Button>
        </div>
      </section>

      <section className="test-section">
        <h2>Botões em Diferentes Tamanhos</h2>
        <div className="button-group">
          <Button 
            size="small"
            tooltip="Botão pequeno"
          >
            Pequeno
          </Button>
          
          <Button 
            size="medium"
            tooltip="Botão médio"
          >
            Médio
          </Button>
          
          <Button 
            size="large"
            tooltip="Botão grande"
          >
            Grande
          </Button>
        </div>
      </section>

      <section className="test-section">
        <h2>Botão Desabilitado</h2>
        <div className="button-group">
          <Button 
            disabled
            tooltip="Este botão está desabilitado"
          >
            Desabilitado
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Test; 