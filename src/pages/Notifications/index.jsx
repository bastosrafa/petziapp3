import React, { useState, useEffect } from 'react';
import { Bell, BellOff, CheckCircle2, XCircle } from 'lucide-react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import './styles.css';

const Notifications = () => {
  const { user } = useAuthContext();
  const [settings, setSettings] = useState({
    foodReminders: true,
    walkReminders: true,
    trainingReminders: true,
    vaccineReminders: true,
    generalUpdates: true
  });
  const [loading, setLoading] = useState(true);
  const [saveStatus, setSaveStatus] = useState(null);

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
        } finally {
          setLoading(false);
        }
      }
    };

    fetchSettings();
  }, [user]);

  const handleToggle = async (setting) => {
    const newSettings = { ...settings, [setting]: !settings[setting] };
    setSettings(newSettings);

    if (user) {
      try {
        await updateDoc(doc(db, 'users', user.uid), {
          notificationSettings: newSettings
        });
        setSaveStatus('success');
        setTimeout(() => setSaveStatus(null), 3000);
      } catch (error) {
        console.error('Error updating notification settings:', error);
        setSaveStatus('error');
        setTimeout(() => setSaveStatus(null), 3000);
      }
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
      </p>

      <div className="settings-grid">
        <div className="setting-item">
          <div className="setting-info">
            <Bell className="setting-icon" />
            <div>
              <h3>Lembretes de Alimentação</h3>
              <p>Receba notificações sobre horários de alimentação</p>
            </div>
          </div>
          <button
            className={`toggle-button ${settings.foodReminders ? 'active' : ''}`}
            onClick={() => handleToggle('foodReminders')}
          >
            {settings.foodReminders ? <Bell /> : <BellOff />}
          </button>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <Bell className="setting-icon" />
            <div>
              <h3>Lembretes de Passeio</h3>
              <p>Alertas para horários de passeio</p>
            </div>
          </div>
          <button
            className={`toggle-button ${settings.walkReminders ? 'active' : ''}`}
            onClick={() => handleToggle('walkReminders')}
          >
            {settings.walkReminders ? <Bell /> : <BellOff />}
          </button>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <Bell className="setting-icon" />
            <div>
              <h3>Lembretes de Treinamento</h3>
              <p>Notificações sobre sessões de treinamento</p>
            </div>
          </div>
          <button
            className={`toggle-button ${settings.trainingReminders ? 'active' : ''}`}
            onClick={() => handleToggle('trainingReminders')}
          >
            {settings.trainingReminders ? <Bell /> : <BellOff />}
          </button>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <Bell className="setting-icon" />
            <div>
              <h3>Lembretes de Vacinas</h3>
              <p>Alertas para datas de vacinação</p>
            </div>
          </div>
          <button
            className={`toggle-button ${settings.vaccineReminders ? 'active' : ''}`}
            onClick={() => handleToggle('vaccineReminders')}
          >
            {settings.vaccineReminders ? <Bell /> : <BellOff />}
          </button>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <Bell className="setting-icon" />
            <div>
              <h3>Atualizações Gerais</h3>
              <p>Notificações sobre novidades e dicas</p>
            </div>
          </div>
          <button
            className={`toggle-button ${settings.generalUpdates ? 'active' : ''}`}
            onClick={() => handleToggle('generalUpdates')}
          >
            {settings.generalUpdates ? <Bell /> : <BellOff />}
          </button>
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