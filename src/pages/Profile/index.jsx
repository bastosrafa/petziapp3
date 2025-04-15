import React, { useState, useEffect } from 'react';
import { useAuthContext } from '@/contexts/AuthContext';
import { useDocument } from '@/hooks/useDocument';
import './styles.css';

const Profile = () => {
  const { user } = useAuthContext();
  const { document: userDoc, error } = useDocument('users', user?.uid);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    phone: '',
    address: '',
    petName: '',
    petBreed: '',
    petBirthDate: '',
    petGender: ''
  });

  useEffect(() => {
    if (userDoc) {
      setFormData({
        displayName: userDoc.displayName || '',
        email: userDoc.email || '',
        phone: userDoc.phone || '',
        address: userDoc.address || '',
        petName: userDoc.petName || '',
        petBreed: userDoc.petBreed || '',
        petBirthDate: userDoc.petBirthDate || '',
        petGender: userDoc.petGender || ''
      });
    }
  }, [userDoc]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aqui você implementará a lógica para salvar as alterações
    setIsEditing(false);
  };

  if (error) return <div className="error">Erro ao carregar perfil</div>;
  if (!userDoc) return <div className="loading">Carregando...</div>;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Meu Perfil</h1>
        <button 
          className={`edit-button ${isEditing ? 'editing' : ''}`}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Cancelar' : 'Editar'}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-section">
          <h2>Informações Pessoais</h2>
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Telefone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Endereço</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className="form-section">
          <h2>Informações do Pet</h2>
          <div className="form-group">
            <label>Nome do Pet</label>
            <input
              type="text"
              name="petName"
              value={formData.petName}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Raça</label>
            <input
              type="text"
              name="petBreed"
              value={formData.petBreed}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Data de Nascimento</label>
            <input
              type="date"
              name="petBirthDate"
              value={formData.petBirthDate}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Gênero</label>
            <select
              name="petGender"
              value={formData.petGender}
              onChange={handleInputChange}
              disabled={!isEditing}
            >
              <option value="">Selecione</option>
              <option value="male">Macho</option>
              <option value="female">Fêmea</option>
            </select>
          </div>
        </div>

        {isEditing && (
          <div className="form-actions">
            <button type="submit" className="save-button">
              Salvar Alterações
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Profile; 