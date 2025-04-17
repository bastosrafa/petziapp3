import styled from 'styled-components';

export const RecommendationsContainer = styled.div`
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.25rem;
  margin-bottom: 1rem;
  max-width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 768px) {
    height: 200px;
    padding: 1rem;
  }
`;

export const RecommendationsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #2c3e50;
    margin: 0;
  }
`;

export const CarouselControls = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CarouselButton = styled.button`
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #495057;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background-color: #e9ecef;
    border-color: #ced4da;
  }
`;

export const RecommendationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  padding-right: 0.5rem;
`;

export const RecommendationCard = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-radius: 0.75rem;
  background-color: #f8f9fa;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin-top: 0.25rem;
`;

export const RecommendationContent = styled.div`
  flex-grow: 1;
  padding-right: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  h3 {
    color: #2c3e50;
    margin-bottom: 0.25rem;
    font-size: 1rem;
    line-height: 1.2;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  p {
    color: #666;
    margin-bottom: 0;
    font-size: 0.9rem;
    line-height: 1.3;
    padding-left: 1.75rem;
  }
`;

export const ActionButton = styled.button`
  background-color: #FF6B6B;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  align-self: center;
  margin-left: 0.5rem;
  box-shadow: 0 2px 4px rgba(255, 107, 107, 0.2);

  &:hover {
    background-color: #ff5252;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(255, 107, 107, 0.3);
  }
`; 