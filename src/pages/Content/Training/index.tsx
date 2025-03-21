import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { trainingModules } from "./config";

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 30px;
`;

const ModulesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ModuleCard = styled.div<{ locked?: boolean }>`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: ${props => (props.locked ? "not-allowed" : "pointer")};
  opacity: ${props => (props.locked ? 0.7 : 1)};
  transition: transform 0.2s;

  &:hover {
    transform: ${props => (props.locked ? "none" : "translateY(-2px)")};
  }
`;

const ModuleHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

const ModuleIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  border-radius: 8px;
  color: #007bff;
`;

const ModuleTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin: 0;
`;

const ModuleDescription = styled.p`
  color: #666;
  margin-bottom: 15px;
`;

const ModuleDuration = styled.span`
  color: #007bff;
  font-size: 14px;
  font-weight: 500;
`;

const LockIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #ff4444;
`;

export default function Training() {
  const navigate = useNavigate();

  const handleModuleClick = (moduleId: string) => {
    const module = trainingModules.find(m => m.id === moduleId);
    if (module && module.route) {
      navigate(module.route);
    }
  };

  return (
    <Container>
      <Title>Módulos de Treinamento</Title>
      <ModulesGrid>
        {trainingModules.map((module) => (
          <ModuleCard
            key={module.id}
            onClick={() => handleModuleClick(module.id)}
            locked={module.id !== "starthere" && module.id !== "behavior"}
          >
            <ModuleHeader>
              {module.icon && (
                <ModuleIcon>
                  {React.createElement(module.icon)}
                </ModuleIcon>
              )}
              <ModuleTitle>{module.title}</ModuleTitle>
            </ModuleHeader>
            <ModuleDescription>{module.description}</ModuleDescription>
            <ModuleDuration>{module.duration}</ModuleDuration>
            {module.id !== "starthere" && module.id !== "behavior" && (
              <LockIcon>🔒</LockIcon>
            )}
          </ModuleCard>
        ))}
      </ModulesGrid>
    </Container>
  );
} 