import { useState, useEffect } from "react";
import { useFirestore } from "@/hooks/useFirestore";
import { useCollection } from "@/hooks/useCollection";
import { useAuthContext } from "@/hooks/useAuthContext";
import styled from "styled-components";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Trash2, ChevronDown, ChevronUp } from "lucide-react";
import { useToast } from "@/shadcn/components/ui/use-toast";

// Estilos
const ListContainer = styled.div`
  margin-top: 20px;
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
  padding: 15px;
  background: white;
  display: ${(props) => (props.isOpen ? "block" : "none")};
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
    color: ${(props) => (props.delete ? "#dc3545" : "#007bff")};
  }
`;

const DetailItem = styled.div`
  margin-bottom: 8px;
`;

const DetailLabel = styled.span`
  font-weight: 500;
  color: #666;
  margin-right: 8px;
`;

const DetailValue = styled.span`
  color: #333;
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

export default function DiaryList({ category, columns }) {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, week, month
  const [expandedRecords, setExpandedRecords] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  
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
        // Filtrar por categoria
        let categoryFiltered = documents.filter(doc => doc.category === category);
        
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
  }, [documents, filter, searchTerm, category, toast, user?.uid]);

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
    if (!window.confirm("Tem certeza que deseja excluir este registro?")) return;
    
    try {
      await deleteDocument(id);
      setRecords(prev => prev.filter(record => record.id !== id));
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

  return (
    <ListContainer>
      <Heading>Histórico de Registros</Heading>
      
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
              <RecordHeader onClick={() => toggleRecordExpanded(record.id)}>
                <RecordDate>
                  {formatDate(record.date)}
                  <RecordTime>{formatTime(record.date)}</RecordTime>
                </RecordDate>
                <RecordActions onClick={e => e.stopPropagation()}>
                  {expandedRecords[record.id] ? 
                    <ChevronUp size={18} /> : 
                    <ChevronDown size={18} />
                  }
                  <ActionButton delete onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(record.id);
                  }}>
                    <Trash2 size={18} />
                  </ActionButton>
                </RecordActions>
              </RecordHeader>
              
              <RecordDetails isOpen={expandedRecords[record.id]}>
                {columns.map((column) => (
                  record[column.key] && (
                    <DetailItem key={column.key}>
                      <DetailLabel>{column.label}:</DetailLabel>
                      <DetailValue>{record[column.key]}</DetailValue>
                    </DetailItem>
                  )
                ))}
                
                {record.notes && (
                  <DetailItem>
                    <DetailLabel>Observações:</DetailLabel>
                    <DetailValue>{record.notes}</DetailValue>
                  </DetailItem>
                )}
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