import React, { useState } from 'react';
import { useAuthContext } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const ChangePassword = () => {
  const { updatePassword } = useAuthContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.newPassword !== formData.confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    if (formData.newPassword.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    try {
      await updatePassword(formData.newPassword);
      setSuccess('Senha alterada com sucesso!');
      setTimeout(() => {
        navigate('/profile');
      }, 2000);
    } catch (err) {
      setError('Erro ao alterar senha. Tente novamente.');
      console.error(err);
    }
  };

  return (
    <div className="change-password-container">
      <h1>Alterar Senha</h1>
      
      <form onSubmit={handleSubmit} className="change-password-form">
        <div className="form-group">
          <label>Senha Atual</label>
          <input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Nova Senha</label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirmar Nova Senha</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <div className="form-actions">
          <button type="button" className="cancel-button" onClick={() => navigate('/profile')}>
            Cancelar
          </button>
          <button type="submit" className="submit-button">
            Alterar Senha
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword; 