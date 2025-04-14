import React, { useState, useEffect } from 'react';
import { Bell, BellOff, CheckCircle2, XCircle } from 'lucide-react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useToast } from "@/shadcn/components/ui/use-toast";
import './styles.css';

const Notifications = () => {
  const { user } = useAuthContext();
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    foodReminders: false,
    walkReminders: false,
    trainingReminders: false,
    vaccineReminders: false,
    generalUpdates: false
  });
  const [loading, setLoading] = useState(true);
  const [saveStatus, setSaveStatus] = useState(null);
  const [notificationPermission, setNotificationPermission] = useState('default');

  // Verifica a permissão de notificação do navegador
  useEffect(() => {
    const checkNotificationPermission = async () => {
      if ('Notification' in window) {
        const permission = await Notification.permission;
        setNotificationPermission(permission);
      }
    };

    checkNotificationPermission();
  }, []);

  // Carrega as configurações do usuário do Firestore
  useEffect(() => {
    const fetchSettings = async () => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists() && userDoc.data().notificationSettings) {
            setSettings(userDoc.data().notificationSettings);
          }
        } catch (error) {
          console.error('Error fetching notification settings:', error);
          toast({
            variant: "destructive",
            title: "Erro ao carregar configurações",
            description: "Não foi possível carregar suas preferências de notificação."
          });
        } finally {
          setLoading(false);
        }
      }
    };

    fetchSettings();
  }, [user]);

  // Solicita permissão para notificações do navegador
  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      try {
        const permission = await Notification.requestPermission();
        setNotificationPermission(permission);
        
        if (permission === 'granted') {
          toast({
            title: "Notificações ativadas",
            description: "Você receberá notificações sobre as atividades do seu pet."
          });
        } else {
          toast({
            variant: "destructive",
            title: "Permissão negada",
            description: "Você precisa permitir notificações nas configurações do seu navegador."
          });
        }
      } catch (error) {
        console.error('Error requesting notification permission:', error);
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Não foi possível solicitar permissão para notificações."
        });
      }
    }
  };

  // Atualiza as configurações de notificação
  const handleToggle = async (setting) => {
    console.log('Iniciando handleToggle para:', setting);
    console.log('Estado atual:', settings[setting]);
    console.log('Permissão de notificação:', notificationPermission);

    if (notificationPermission !== 'granted') {
      console.log('Solicitando permissão de notificação...');
      await requestNotificationPermission();
      if (notificationPermission !== 'granted') {
        console.log('Permissão de notificação não concedida');
        return;
      }
    }

    const newSettings = { ...settings, [setting]: !settings[setting] };
    console.log('Novas configurações:', newSettings);
    setSettings(newSettings);

    if (user) {
      try {
        console.log('Atualizando configurações no Firestore...');
        await updateDoc(doc(db, 'users', user.uid), {
          notificationSettings: newSettings
        });
        console.log('Configurações atualizadas com sucesso no Firestore');
        setSaveStatus('success');
        
        // Envia uma notificação de teste quando ativa
        if (newSettings[setting]) {
          console.log('Enviando notificação de teste...');
          const notificationTitles = {
            foodReminders: '🍽️ Lembrete de Alimentação',
            walkReminders: '🦮 Lembrete de Passeio',
            trainingReminders: '🎯 Lembrete de Treinamento',
            vaccineReminders: '💉 Lembrete de Vacina',
            generalUpdates: '📢 Atualização Geral'
          };
          sendTestNotification(notificationTitles[setting]);
        }

        toast({
          title: "Configurações salvas",
          description: "Suas preferências de notificação foram atualizadas."
        });

        setTimeout(() => setSaveStatus(null), 3000);
      } catch (error) {
        console.error('Erro ao atualizar configurações:', error);
        setSaveStatus('error');
        toast({
          variant: "destructive",
          title: "Erro ao salvar",
          description: "Não foi possível salvar suas preferências de notificação."
        });
        setTimeout(() => setSaveStatus(null), 3000);
      }
    } else {
      console.log('Usuário não autenticado');
    }
  };

  // Função para enviar uma notificação de teste
  const sendTestNotification = (title) => {
    console.log('Tentando enviar notificação:', title);
    if (notificationPermission === 'granted') {
      console.log('Permissão concedida, criando notificação...');
      try {
        const notification = new Notification(title, {
          body: 'Esta é uma notificação de teste para verificar se está funcionando.',
          icon: '/favicon.ico'
        });
        console.log('Notificação criada com sucesso:', notification);
      } catch (error) {
        console.error('Erro ao criar notificação:', error);
      }
    } else {
      console.log('Permissão de notificação não concedida');
    }
  };

  if (loading) {
    return (
      <div className="notifications-container">
        <div className="loading">Carregando configurações...</div>
      </div>
    );
  }

  return (
    <div className="notifications-container">
      <h1>Configurações de Notificações</h1>
      <p className="description">
        Gerencie suas preferências de notificações para receber alertas sobre atividades do seu pet.
        {notificationPermission !== 'granted' && (
          <button 
            className="permission-button"
            onClick={requestNotificationPermission}
          >
            Permitir Notificações
          </button>
        )}
      </p>

      <div className="settings-grid">
        <div 
          className={`setting-item ${settings.foodReminders ? 'active' : ''}`}
          onClick={() => handleToggle('foodReminders')}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && handleToggle('foodReminders')}
        >
          <div className="setting-info">
            <Bell className="setting-icon" />
            <div>
              <h3>Lembretes de Alimentação</h3>
              <p>Receba notificações sobre horários de alimentação</p>
            </div>
          </div>
          <div className="toggle-indicator">
            {settings.foodReminders ? <Bell /> : <BellOff />}
          </div>
        </div>

        <div 
          className={`setting-item ${settings.walkReminders ? 'active' : ''}`}
          onClick={() => handleToggle('walkReminders')}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && handleToggle('walkReminders')}
        >
          <div className="setting-info">
            <Bell className="setting-icon" />
            <div>
              <h3>Lembretes de Passeio</h3>
              <p>Alertas para horários de passeio</p>
            </div>
          </div>
          <div className="toggle-indicator">
            {settings.walkReminders ? <Bell /> : <BellOff />}
          </div>
        </div>

        <div 
          className={`setting-item ${settings.trainingReminders ? 'active' : ''}`}
          onClick={() => handleToggle('trainingReminders')}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && handleToggle('trainingReminders')}
        >
          <div className="setting-info">
            <Bell className="setting-icon" />
            <div>
              <h3>Lembretes de Treinamento</h3>
              <p>Notificações sobre sessões de treinamento</p>
            </div>
          </div>
          <div className="toggle-indicator">
            {settings.trainingReminders ? <Bell /> : <BellOff />}
          </div>
        </div>

        <div 
          className={`setting-item ${settings.vaccineReminders ? 'active' : ''}`}
          onClick={() => handleToggle('vaccineReminders')}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && handleToggle('vaccineReminders')}
        >
          <div className="setting-info">
            <Bell className="setting-icon" />
            <div>
              <h3>Lembretes de Vacinas</h3>
              <p>Alertas para datas de vacinação</p>
            </div>
          </div>
          <div className="toggle-indicator">
            {settings.vaccineReminders ? <Bell /> : <BellOff />}
          </div>
        </div>

        <div 
          className={`setting-item ${settings.generalUpdates ? 'active' : ''}`}
          onClick={() => handleToggle('generalUpdates')}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && handleToggle('generalUpdates')}
        >
          <div className="setting-info">
            <Bell className="setting-icon" />
            <div>
              <h3>Atualizações Gerais</h3>
              <p>Notificações sobre novidades e dicas</p>
            </div>
          </div>
          <div className="toggle-indicator">
            {settings.generalUpdates ? <Bell /> : <BellOff />}
          </div>
        </div>
      </div>

      {saveStatus === 'success' && (
        <div className="status-message success">
          <CheckCircle2 className="status-icon" />
          Configurações salvas com sucesso!
        </div>
      )}
      {saveStatus === 'error' && (
        <div className="status-message error">
          <XCircle className="status-icon" />
          Erro ao salvar configurações
        </div>
      )}
    </div>
  );
};

export default Notifications; 