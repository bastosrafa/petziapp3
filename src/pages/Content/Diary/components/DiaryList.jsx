import { useState, useEffect } from "react";
import { useFirestore } from "@/hooks/useFirestore";
import { useCollection } from "@/hooks/useCollection";
import { useAuthContext } from "@/hooks/useAuthContext";
import styled from "styled-components";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Trash2, ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";
import { useToast } from "@/shadcn/components/ui/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shadcn/components/ui/alert-dialog";

// Estilos
const ListContainer = styled.div`
  margin-top: 20px;
  max-height: 80vh;
  overflow-y: auto;
  padding-right: 5px;
  
  /* Estilo da barra de rolagem */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f5f5f5;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #d1d1d1;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #b8b8b8;
  }
`;

const Heading = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 15px;
`;

const EmptyMessage = styled.p`
  color: #666;
  font-style: italic;
  padding: 20px;
  text-align: center;
  background: #f9f9f9;
  border-radius: 8px;
`;

const RecordItem = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 12px;
  overflow: hidden;
`;

const RecordHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  background: #f5f5f5;
  cursor: pointer;
  transition: background-color 0.2s, border-radius 0.3s;
  position: relative;
  border-radius: ${props => props.expanded === 'true' ? '8px 8px 0 0' : '8px'};
  
  &:hover {
    background-color: #e9e9e9;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 15px;
    right: 15px;
    height: 1px;
    background-color: #e0e0e0;
    opacity: ${props => props.expanded === 'true' ? '1' : '0'};
    transition: opacity 0.2s;
  }
`;

const RecordDate = styled.div`
  font-weight: 500;
`;

const RecordTime = styled.span`
  color: #666;
  margin-left: 10px;
  font-size: 14px;
`;

const RecordDetails = styled.div`
  padding: 0;
  background: white;
  height: ${props => props.expanded === 'true' ? 'auto' : '0'};
  max-height: ${props => props.expanded === 'true' ? '1000px' : '0'};
  overflow: hidden;
  opacity: ${props => props.expanded === 'true' ? '1' : '0'};
  transition: max-height 0.4s ease-in-out, opacity 0.3s ease-in-out;
  border-top: ${props => props.expanded === 'true' ? '1px solid #eee' : 'none'};
  border-radius: 0 0 8px 8px;
  margin-top: ${props => props.expanded === 'true' ? '-1px' : '0'};
`;

const RecordDetailsInner = styled.div`
  padding: 15px;
  opacity: ${props => props.expanded === 'true' ? '1' : '0'};
  transition: opacity 0.2s ease-in-out;
  transition-delay: ${props => props.expanded === 'true' ? '0.1s' : '0'};
`;

const RecordActions = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  display: flex;
  align-items: center;
  padding: 5px;
  
  &:hover {
    color: ${(props) => (props.$delete ? "#dc3545" : "#007bff")};
  }
`;

const DetailItem = styled.div`
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const DetailLabel = styled.span`
  font-weight: 600;
  color: #555;
  margin-right: 12px;
  min-width: 120px;
  display: block;
  margin-bottom: 4px;
  
  @media (min-width: 640px) {
    margin-bottom: 0;
    flex-shrink: 0;
  }
`;

const DetailValue = styled.span`
  color: #333;
  flex: 1;
  display: block;
  word-break: break-word;
`;

const DetailSeparator = styled.hr`
  margin: 15px 0;
  border: 0;
  height: 1px;
  background-color: #eee;
`;

const FilterControls = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const FilterButton = styled.button`
  padding: 8px 12px;
  border-radius: 4px;
  background-color: ${(props) => (props.active === 'true' ? "#007bff" : "#f0f0f0")};
  color: ${(props) => (props.active === 'true' ? "white" : "#333")};
  border: none;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    background-color: ${(props) => (props.active === 'true' ? "#0056b3" : "#e0e0e0")};
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  color: #666;
`;

// Componentes de paginação
const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

const PageButton = styled.button`
  padding: 8px 12px;
  border-radius: 4px;
  background-color: ${(props) => (props.active === 'true' ? "#007bff" : "#f0f0f0")};
  color: ${(props) => (props.active === 'true' ? "white" : "#333")};
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => (props.active === 'true' ? "#0056b3" : "#e0e0e0")};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Componentes de busca
const SearchContainer = styled.div`
  margin-bottom: 15px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

// Componentes de estatísticas
const StatsContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

const StatCard = styled.div`
  flex: 1;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #007bff;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
`;

const ChevronIcon = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  transform: ${props => props.expanded === 'true' ? 'rotate(180deg)' : 'rotate(0)'};
`;

const CategoryBadge = styled.div`
  display: inline-block;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  color: white;
  background-color: ${props => {
    switch (props.category) {
      case 'veterinario': return '#4a90e2';
      case 'peso': return '#50b83c';
      case 'passeio': return '#9c6ade';
      case 'alimentacao': return '#f49342';
      default: return '#637381';
    }
  }};
`;

const EmptyDetailsMessage = styled.div`
  color: #666;
  font-style: italic;
  padding: 10px 0;
  text-align: center;
`;

export default function DiaryList({ category, columns }) {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, week, month
  const [expandedRecords, setExpandedRecords] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  
  // Estado para controlar o diálogo de confirmação
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [recordToDelete, setRecordToDelete] = useState(null);
  
  const { deleteDocument } = useFirestore('diary');
  const { user } = useAuthContext();
  const { toast } = useToast();
  
  // Usar o hook useCollection para buscar os documentos do usuário atual
  const { documents, error } = useCollection(
    'diary',
    ['userId', '==', user?.uid]
  );
  
  useEffect(() => {
    setLoading(true);
    // Processar os documentos quando eles mudarem
    if (documents) {
      try {
        // Debugging - Verificar todas as categorias disponíveis
        console.log('Todas as categorias disponíveis:', documents.map(doc => doc.category));
        console.log('Categoria que estamos filtrando:', category);
        
        // Filtrar por categoria - permitir correspondências parciais
        let categoryFiltered = documents.filter(doc => {
          // Correspondência exata
          if (doc.category === category) return true;
          
          // Correspondências alternativas para possíveis diferenças de nomenclatura
          if (category === 'veterinario' && (doc.category === 'vet' || doc.category === 'veterinária' || doc.category === 'veterinaria')) return true;
          if (category === 'passeio' && (doc.category === 'passeios' || doc.category === 'walk')) return true;
          if (category === 'alimentacao' && (doc.category === 'alimentação' || doc.category === 'comida' || doc.category === 'food')) return true;
          if (category === 'peso' && (doc.category === 'weight' || doc.category === 'medidas')) return true;
          if (category === 'outros' && (doc.category === 'other' || doc.category === 'outro')) return true;
          
          return false;
        });
        
        console.log('Registros filtrados por categoria:', categoryFiltered.length);
        
        // Ordenar por data (decrescente)
        categoryFiltered.sort((a, b) => {
          try {
            const dateA = a.date?.toDate ? a.date.toDate() : new Date(a.date);
            const dateB = b.date?.toDate ? b.date.toDate() : new Date(b.date);
            return dateB - dateA; // Ordem decrescente
          } catch (error) {
            console.error("Erro ao ordenar datas:", error);
            return 0;
          }
        });
        
        // Aplicar filtros de data se necessário
        let filteredData = categoryFiltered;
        if (filter === 'week') {
          const oneWeekAgo = new Date();
          oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
          filteredData = categoryFiltered.filter(record => {
            try {
              return record.date && record.date.toDate && record.date.toDate() >= oneWeekAgo;
            } catch (error) {
              console.error("Erro ao filtrar por semana:", error, record);
              return false;
            }
          });
        } else if (filter === 'month') {
          const oneMonthAgo = new Date();
          oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
          filteredData = categoryFiltered.filter(record => {
            try {
              return record.date && record.date.toDate && record.date.toDate() >= oneMonthAgo;
            } catch (error) {
              console.error("Erro ao filtrar por mês:", error, record);
              return false;
            }
          });
        }
        
        // Aplicar filtro de busca
        if (searchTerm.trim()) {
          filteredData = filteredData.filter(record => {
            // Buscar em todos os campos de texto
            return Object.keys(record).some(key => {
              const value = record[key];
              return typeof value === 'string' && 
                    value.toLowerCase().includes(searchTerm.toLowerCase());
            });
          });
        }
        
        setRecords(filteredData);
        // Resetar para a primeira página quando mudar os filtros
        setCurrentPage(1);
        
        // Inicializar o estado de expansão para cada registro
        const initialExpanded = {};
        filteredData.forEach(record => {
          initialExpanded[record.id] = false;
        });
        setExpandedRecords(initialExpanded);
      } catch (error) {
        console.error("Erro ao processar documentos:", error);
        toast({
          title: "Erro ao processar dados",
          description: "Ocorreu um erro ao processar os dados. Tente novamente.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }
  }, [documents, filter, searchTerm, category, toast, user?.uid, columns]);

  // Exibir mensagem de erro se houver problema na consulta
  useEffect(() => {
    if (error) {
      console.error(`Erro na coleção ${category}:`, error);
      toast({
        title: "Erro ao carregar histórico",
        description: "Estamos com problemas técnicos para carregar o histórico. Tente novamente mais tarde.",
        variant: "destructive",
      });
      setLoading(false);
    } else if (documents && documents.length === 0) {
      // Se não há documentos na coleção, defina records como array vazio
      setRecords([]);
      setLoading(false);
    }
  }, [error, category, toast, documents]);

  const handleDelete = async (id) => {
    // Abrir diálogo de confirmação
    setRecordToDelete(id);
    setDeleteDialogOpen(true);
  };
  
  const confirmDelete = async () => {
    if (!recordToDelete) return;
    
    try {
      await deleteDocument(recordToDelete);
      setRecords(prev => prev.filter(record => record.id !== recordToDelete));
      toast({
        title: "Sucesso!",
        description: "Registro excluído com sucesso.",
        variant: "default",
      });
    } catch (error) {
      console.error("Error deleting record:", error);
      toast({
        title: "Erro",
        description: "Não foi possível excluir o registro. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setDeleteDialogOpen(false);
      setRecordToDelete(null);
    }
  };

  const toggleRecordExpanded = (id) => {
    setExpandedRecords(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const formatDate = (date) => {
    try {
      if (!date) return 'Data não disponível';
      const dateObj = date.toDate ? date.toDate() : new Date(date);
      return format(dateObj, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
    } catch (error) {
      console.error("Erro ao formatar data:", error, date);
      return 'Data inválida';
    }
  };

  const formatTime = (date) => {
    try {
      if (!date) return '';
      const dateObj = date.toDate ? date.toDate() : new Date(date);
      return format(dateObj, "HH:mm");
    } catch (error) {
      console.error("Erro ao formatar hora:", error, date);
      return '';
    }
  };

  // Calcular estatísticas
  const totalRecords = records.length;

  const thisWeekRecords = records.filter(record => {
    try {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      return record.date && record.date.toDate && record.date.toDate() >= oneWeekAgo;
    } catch (error) {
      console.error("Erro ao processar data do registro:", error, record);
      return false;
    }
  }).length;

  const thisMonthRecords = records.filter(record => {
    try {
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
      return record.date && record.date.toDate && record.date.toDate() >= oneMonthAgo;
    } catch (error) {
      console.error("Erro ao processar data do registro:", error, record);
      return false;
    }
  }).length;

  // Calcular índices para paginação
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(records.length / recordsPerPage);

  // Funções de navegação
  const goToPage = (page) => setCurrentPage(page);
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));

  // Função para formatar os valores baseados em tipo
  const formatFieldValue = (key, value) => {
    if (!value) return '';
    
    // Adicionar formatação específica para determinados tipos de campo
    switch (key) {
      case 'weight':
        return `${value} kg`;
      case 'height':
      case 'length':
        return `${value} cm`;
      case 'duration':
        return `${value} minutos`;
      case 'nextAppointment':
        return formatDate(value);
      default:
        return value;
    }
  };

  // Função para renderizar os detalhes baseados na categoria
  const renderDetailsByCategory = (record, category, columns) => {
    // Se não temos registro, retornar mensagem
    if (!record) {
      return <EmptyDetailsMessage>Nenhum detalhe disponível</EmptyDetailsMessage>;
    }
    
    // Debug: Verificar os campos disponíveis no registro
    console.log('Categoria do registro:', record.category);
    console.log('Categoria esperada:', category);
    console.log('Todos os campos do registro:', Object.keys(record));
    
    // ** Tratamento especial para visitas ao veterinário **
    if (category === 'veterinario') {
      const fields = [];
      
      // Campos específicos do formulário de veterinário
      if (record.title) fields.push({ key: 'title', label: 'Título', value: record.title });
      if (record.description) fields.push({ key: 'description', label: 'Descrição', value: record.description });
      if (record.location) fields.push({ key: 'location', label: 'Localização', value: record.location });
      
      // Campos das colunas que possam existir
      if (record.vetName) fields.push({ key: 'vetName', label: 'Veterinário', value: record.vetName });
      if (record.procedure) fields.push({ key: 'procedure', label: 'Procedimento', value: record.procedure });
      if (record.reason) fields.push({ key: 'reason', label: 'Motivo', value: record.reason });
      
      // Se temos algum campo para mostrar
      if (fields.length > 0 || record.notes) {
        return (
          <div className="space-y-4">
            {fields.length > 0 && (
              <div className="space-y-3">
                {fields.map(field => (
                  <DetailItem key={field.key}>
                    <DetailLabel>{field.label}:</DetailLabel>
                    <DetailValue>{field.value}</DetailValue>
                  </DetailItem>
                ))}
              </div>
            )}
            
            {record.notes && (
              <div>
                {fields.length > 0 && <DetailSeparator />}
                <DetailItem>
                  <DetailLabel>Observações:</DetailLabel>
                  <DetailValue className="whitespace-pre-line">{record.notes}</DetailValue>
                </DetailItem>
              </div>
            )}
          </div>
        );
      }
    }
    
    // Para outras categorias, continuar com o processamento normal
    const fieldsMap = {
      // Mapeamento comum de campos para cada categoria
      veterinario: ['vetName', 'procedure', 'reason', 'nextAppointment'],
      peso: ['weight', 'height', 'length'],
      passeio: ['duration', 'location'],
      alimentacao: ['foodType', 'quantity'],
      outros: ['title', 'description']
    };
    
    // Lista de campos a verificar com base na categoria
    const fieldsToCheck = fieldsMap[category] || [];
    console.log('Campos a verificar para esta categoria:', fieldsToCheck);
    console.log('Valores no registro para estes campos:', 
      fieldsToCheck.map(field => ({ field, value: record[field] }))
    );
    
    // Obter os campos a serem exibidos baseados na categoria e nas colunas configuradas
    let fieldsToDisplay = [];
    
    // Se temos colunas configuradas, usá-las
    if (columns && columns.length > 0) {
      fieldsToDisplay = columns
        .map(column => {
          // Verificar se o campo existe no registro
          const value = record[column.key];
          console.log(`Verificando coluna ${column.key}:`, value);
          
          return {
            key: column.key,
            label: column.label,
            value: value ? formatFieldValue(column.key, value) : null
          };
        })
        .filter(field => field.value); // Filtrar campos vazios
    } else {
      // Se não temos colunas, mostrar campos relevantes baseados no objeto
      fieldsToDisplay = Object.entries(record)
        .filter(([key, value]) => 
          !['id', 'date', 'userId', 'createdAt', 'category', 'notes'].includes(key) && value
        )
        .map(([key, value]) => ({
          key,
          label: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim(),
          value: formatFieldValue(key, value)
        }));
    }
    
    // Adicionar campos específicos baseados na categoria
    if (category === 'veterinario' && record.nextAppointment) {
      fieldsToDisplay.push({
        key: 'nextAppointment',
        label: 'Próxima Consulta',
        value: formatDate(record.nextAppointment)
      });
    }
    
    // ** Checar campos adicionais que não estejam nas colunas configuradas **
    // Isso é especialmente útil para campos como title, description no veterinário
    if (fieldsToDisplay.length === 0) {
      // Campos comuns que podem estar presentes
      if (record.title) {
        fieldsToDisplay.push({
          key: 'title',
          label: 'Título',
          value: record.title
        });
      }
      
      if (record.description && !fieldsToDisplay.some(f => f.key === 'description')) {
        fieldsToDisplay.push({
          key: 'description',
          label: 'Descrição',
          value: record.description
        });
      }
      
      if (record.location && !fieldsToDisplay.some(f => f.key === 'location')) {
        fieldsToDisplay.push({
          key: 'location',
          label: 'Localização',
          value: record.location
        });
      }
    }
    
    console.log('Campos a serem exibidos após processamento:', fieldsToDisplay);
    
    // Se não há campos para exibir e não há observações, mostrar mensagem amigável
    if (fieldsToDisplay.length === 0 && !record.notes) {
      // Tentar encontrar quaisquer campos relevantes não capturados pelas colunas
      const anyFields = Object.entries(record)
        .filter(([key, value]) => 
          !['id', 'date', 'userId', 'createdAt', 'category', 'notes'].includes(key) && value
        );
      
      console.log('Campos adicionais encontrados:', anyFields);
      
      // Se realmente não há campos adicionais
      if (anyFields.length === 0) {
        return <EmptyDetailsMessage>Nenhum detalhe adicional disponível</EmptyDetailsMessage>;
      }
      
      // Se há campos, mas eles não foram capturados pelas colunas, exibi-los
      return (
        <div className="space-y-4">
          {anyFields.map(([key, value]) => {
            const label = key
              .replace(/([A-Z])/g, ' $1')
              .replace(/^./, str => str.toUpperCase())
              .trim();
            
            return (
              <DetailItem key={key}>
                <DetailLabel>{label}:</DetailLabel>
                <DetailValue>{formatFieldValue(key, value)}</DetailValue>
              </DetailItem>
            );
          })}
          
          {record.notes && (
            <DetailItem>
              <DetailLabel>Observações:</DetailLabel>
              <DetailValue className="whitespace-pre-line">{record.notes}</DetailValue>
            </DetailItem>
          )}
        </div>
      );
    }
    
    return (
      <div className="space-y-4">
        {/* Campos regulares */}
        {fieldsToDisplay.length > 0 && (
          <div className="space-y-3">
            {fieldsToDisplay.map(field => (
              <DetailItem key={field.key}>
                <DetailLabel>{field.label}:</DetailLabel>
                <DetailValue>{field.value}</DetailValue>
              </DetailItem>
            ))}
          </div>
        )}
        
        {/* Observações */}
        {record.notes && (
          <div>
            {fieldsToDisplay.length > 0 && <DetailSeparator />}
            <DetailItem>
              <DetailLabel>Observações:</DetailLabel>
              <DetailValue className="whitespace-pre-line">{record.notes}</DetailValue>
            </DetailItem>
          </div>
        )}
      </div>
    );
  };

  return (
    <ListContainer>
      <Heading>Histórico de Registros</Heading>
      
      {/* AlertDialog para confirmação de exclusão */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent className="border-none shadow-lg">
          <AlertDialogHeader>
            <div className="flex items-center justify-center mb-2">
              <AlertTriangle className="text-red-500 mr-2" size={24} />
              <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            </div>
            <AlertDialogDescription className="text-center">
              Tem certeza que deseja excluir este registro?
              <br />Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-gray-100 hover:bg-gray-200 text-gray-800 border-none">Cancelar</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDelete} 
              className="bg-red-500 hover:bg-red-600 text-white border-none"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      <StatsContainer>
        <StatCard>
          <StatValue>{totalRecords}</StatValue>
          <StatLabel>Total de Registros</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{thisWeekRecords}</StatValue>
          <StatLabel>Nesta Semana</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{thisMonthRecords}</StatValue>
          <StatLabel>Neste Mês</StatLabel>
        </StatCard>
      </StatsContainer>
      
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Buscar registros..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>
      
      <FilterControls>
        <FilterButton 
          active={filter === 'all' ? 'true' : undefined} 
          onClick={() => setFilter('all')}
        >
          Todos
        </FilterButton>
        <FilterButton 
          active={filter === 'week' ? 'true' : undefined} 
          onClick={() => setFilter('week')}
        >
          Última Semana
        </FilterButton>
        <FilterButton 
          active={filter === 'month' ? 'true' : undefined}
          onClick={() => setFilter('month')}
        >
          Último Mês
        </FilterButton>
      </FilterControls>

      {loading ? (
        <LoadingSpinner>Carregando registros...</LoadingSpinner>
      ) : records.length === 0 ? (
        <EmptyMessage>Nenhum registro encontrado.</EmptyMessage>
      ) : (
        <>
          {currentRecords.map((record) => (
            <RecordItem key={record.id}>
              <RecordHeader 
                onClick={() => toggleRecordExpanded(record.id)} 
                expanded={expandedRecords[record.id] ? 'true' : 'false'}
              >
                <RecordDate>
                  {formatDate(record.date)}
                  <RecordTime>{formatTime(record.date)}</RecordTime>
                </RecordDate>
                <RecordActions>
                  <ActionButton 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleRecordExpanded(record.id);
                    }}
                  >
                    <ChevronIcon expanded={expandedRecords[record.id] ? 'true' : 'false'}>
                      <ChevronDown size={18} />
                    </ChevronIcon>
                  </ActionButton>
                  <ActionButton 
                    $delete 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(record.id);
                    }}
                  >
                    <Trash2 size={18} />
                  </ActionButton>
                </RecordActions>
              </RecordHeader>
              
              <RecordDetails expanded={expandedRecords[record.id] ? 'true' : 'false'}>
                <RecordDetailsInner expanded={expandedRecords[record.id] ? 'true' : 'false'}>
                  {renderDetailsByCategory(record, category, columns)}
                </RecordDetailsInner>
              </RecordDetails>
            </RecordItem>
          ))}
          
          {totalPages > 1 && (
            <PaginationControls>
              <PageButton onClick={prevPage} disabled={currentPage === 1}>
                Anterior
              </PageButton>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <PageButton
                  key={page}
                  active={currentPage === page ? 'true' : undefined}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </PageButton>
              ))}
              
              <PageButton onClick={nextPage} disabled={currentPage === totalPages}>
                Próximo
              </PageButton>
            </PaginationControls>
          )}
        </>
      )}
    </ListContainer>
  );
} 