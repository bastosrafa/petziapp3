import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Plus, List } from "lucide-react";

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
    <div>
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
    </div>
  );
} 