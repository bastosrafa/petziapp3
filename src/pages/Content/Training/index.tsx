import React from 'react';
import styled from 'styled-components';

interface ModuleCardProps {
  locked?: boolean;
}

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 30px;
  padding-top: 20px;
`;

const ModulesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
  flex: 1;
`;

const ModuleCard = styled.div<ModuleCardProps>`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: ${props => (props.locked ? "not-allowed" : "pointer")};
  opacity: ${props => (props.locked ? 0.7 : 1)};
  transition: transform 0.2s;
  position: relative;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  &:hover {
    transform: ${props => (props.locked ? "none" : "translateY(-2px)")};
  }
`;

const ModuleHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  flex-wrap: wrap;
  width: 100%;
  overflow: hidden;
`;

const ModuleTitle = styled.h2`
  font-size: 15px;
  color: #333;
  margin: 0;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 260px;
`;

const ModuleDescription = styled.p`
  color: #666;
  margin-bottom: 15px;
  flex: 1;
  min-height: 60px;
  width: 100%;
`;

const ModuleCardContent = styled.div`
  flex: 1;
`;

const ModuleCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const ModuleCardButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ModuleCardLocked = styled.div`
  background-color: #f0f0f0;
  border-radius: 4px;
  padding: 8px 16px;
  text-align: center;
`;

const ModuleCardLockedText = styled.span`
  color: #666;
`;

const ModuleCardLockedIcon = styled.span`
  margin-left: 8px;
`;

const ModuleCardLockedContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModuleCardLockedTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 0;
`;

const ModuleCardLockedDescription = styled.p`
  color: #666;
  margin-bottom: 15px;
`;

const ModuleCardLockedButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ModuleCardLockedContentText = styled.span`
  color: #666;
`;

const ModuleCardLockedContentIcon = styled.span`
  margin-left: 8px;
`;

const ModuleCardLockedContentButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ModuleCardLockedContentTextButton = styled.span`
  color: #666;
`;

const ModuleCardLockedContentIconButton = styled.span`
  margin-left: 8px;
`;

const ModuleCardLockedContentTextButtonIcon = styled.span`
  margin-left: 8px;
`;

const ModuleCardLockedContentTextButtonIconButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ModuleCardLockedContentTextButtonIconButtonIconButtonIcon = styled.span`
  margin-left: 8px;
`;

const ModuleCardLockedContentTextButtonIconButtonIconButtonIconButtonIcon = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ModuleCardLockedContentTextButtonIconButtonIconButtonIconButtonIconSpan = styled.span`
  margin-left: 8px;
`;

const ModuleCardLockedContentTextButtonIconButtonIconButtonIconButtonIconButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
