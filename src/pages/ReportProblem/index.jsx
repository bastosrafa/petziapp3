import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPaperPlane, FaUpload } from 'react-icons/fa';
import './styles.css';

const ReportProblem = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    type: 'bug',
    title: '',
    description: '',
    file: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const data = new FormData();
    data.append('type', formData.type);
    data.append('title', formData.title);
    data.append('description', formData.description);
    if (formData.file) {
      data.append('file', formData.file);
    }

    try {
      const response = await fetch("https://api.petziapp.com/api/report-problem", {
        method: "POST",
        body: data,
        credentials: 'include',
        headers: {
          'Accept': 'application/json'
        }
      });

      const responseData = await response.json();

      if (response.ok) {
        alert('Relatório enviado com sucesso! Obrigado por nos ajudar a melhorar o PetziApp.');
        navigate('/');
      } else {
        setError(responseData.message || 'Erro ao enviar relatório. Por favor, tente novamente.');
      }
    } catch (err) {
      if (err.name === 'TypeError' && err.message.includes('Failed to fetch')) {
        setError('Erro de conexão. Verifique sua internet e tente novamente.');
      } else {
        setError('Erro ao enviar relatório. Por favor, tente novamente mais tarde.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      const file = files[0];
      if (file && file.size > 5 * 1024 * 1024) { // 5MB limit
        alert('O arquivo é muito grande. O tamanho máximo permitido é 5MB.');
        e.target.value = '';
        return;
      }
      setFormData(prev => ({
        ...prev,
        file
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="report-container">
      <div className="report-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
        <h1>Reportar Problema</h1>
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <form className="report-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="type">Tipo de Problema</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            disabled={isLoading}
          >
            <option value="bug">Bug/Erro</option>
            <option value="feature">Sugestão de Melhoria</option>
            <option value="content">Problema de Conteúdo</option>
            <option value="other">Outro</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Descreva brevemente o problema"
            required
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Descrição Detalhada</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descreva o problema em detalhes"
            required
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="file">Anexar Arquivo (opcional, máximo 5MB)</label>
          <div className="file-input-wrapper">
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleChange}
              className="file-input"
              disabled={isLoading}
            />
            <label htmlFor="file" className="file-label">
              <FaUpload />
              {formData.file ? formData.file.name : 'Escolher arquivo'}
            </label>
          </div>
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={isLoading}
        >
          {isLoading ? (
            'Enviando...'
          ) : (
            <>
              <FaPaperPlane />
              Enviar Relatório
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ReportProblem; 