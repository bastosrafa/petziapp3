import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Plus, List, X } from "lucide-react";

const TabsContainer = styled.div`
  margin-bottom: 20px;
`;

const TabsList = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
`;

const Tab = styled.button`
  padding: 10px 15px;
  background: ${(props) => (props.active === 'true' ? "white" : "transparent")};
  border: none;
  border-bottom: 2px solid ${(props) => (props.active === 'true' ? "#007bff" : "transparent")};
  color: ${(props) => (props.active === 'true' ? "#007bff" : "#666")};
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    color: #007bff;
  }
`;

const TabContent = styled.div`
  padding-top: 20px;
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  max-width: 500px;
  margin: 0 auto;
  padding: 48px 24px 24px 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  min-height: 0;
`;

export default function DiaryTabView({ category, formComponent, listComponent }) {
  const [activeTab, setActiveTab] = useState("form");
  
  // Clone o formComponent e adicione um callback onSuccess
  const formWithCallback = React.cloneElement(formComponent, {
    onSuccess: () => {
      // Quando o formulário for enviado com sucesso, mude para a aba de histórico
      setActiveTab("list");
    }
  });

  return (
    <Card>
      <TabsContainer>
        <TabsList>
          <Tab
            active={activeTab === "form" ? 'true' : 'false'}
            onClick={() => setActiveTab("form")}
          >
            <Plus size={18} />
            Registrar
          </Tab>
          <Tab
            active={activeTab === "list" ? 'true' : 'false'}
            onClick={() => setActiveTab("list")}
          >
            <List size={18} />
            Histórico
          </Tab>
        </TabsList>
      </TabsContainer>

      <TabContent>
        {activeTab === "form" ? formWithCallback : listComponent}
      </TabContent>
    </Card>
  );
} 