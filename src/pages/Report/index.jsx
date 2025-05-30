import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPaperPlane, FaUpload } from 'react-icons/fa';
import './styles.css';

const Report = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    type: 'bug',
    title: '',
    description: '',
    file: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o relatório
    console.log('Dados do relatório:', formData);
    // Após enviar, redirecionar para a página de confirmação
    navigate('/report/success');
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData(prev => ({
        ...prev,
        file: files[0]
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

      <form className="report-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="type">Tipo de Problema</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="bug">Bug/Erro</option>
            <option value="feature">Sugestão de Melhoria</option>
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
          />
        </div>

        <div className="form-group">
          <label htmlFor="file">Anexar Documento</label>
          <div className="file-input-wrapper">
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleChange}
              className="file-input"
            />
            <label htmlFor="file" className="file-label">
              <FaUpload />
              {formData.file ? formData.file.name : 'Escolher arquivo'}
            </label>
          </div>
        </div>

        <button type="submit" className="submit-button">
          <FaPaperPlane />
          Enviar Relatório
        </button>
      </form>
    </div>
  );
};

export default Report; 