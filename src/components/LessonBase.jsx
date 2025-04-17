import React, { useState } from 'react';
import styled from 'styled-components';
import ModuleCompletionPopup from './ModuleCompletionPopup';

const LessonContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #2D3748;
  margin-bottom: 2rem;
  text-align: center;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`;

const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% - 100px);
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  pointer-events: ${props => props.active ? 'auto' : 'none'};
`;

const SlideContent = styled.div`
  height: 100%;
  padding: 2.5rem;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #4299E1 #F7FAFC;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #F7FAFC;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #4299E1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #3182CE;
  }
`;

const SlideTitle = styled.h2`
  font-size: 1.5rem;
  color: #2D3748;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ContentSection = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  color: #4A5568;
  margin-bottom: 1rem;
`;

const ContentText = styled.p`
  color: #4A5568;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: ${props => props.height || '200px'};
  background: #F7FAFC;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.fit || 'cover'};
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  z-index: 1;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #4299E1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #3182CE;
  }

  &:disabled {
    background: #CBD5E0;
    cursor: not-allowed;
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? '#4299E1' : '#CBD5E0'};
  cursor: pointer;
  transition: background 0.2s;
`;

export default function LessonBase({
  title,
  slides,
  currentSlide,
  onNextSlide,
  onPrevSlide,
  onGoToSlide,
  scrollable,
  isLastLesson = false,
  nextModulePath = "/content/training"
}) {
  const [showPopup, setShowPopup] = useState(false);

  const handleNextSlide = () => {
    if (currentSlide === slides.length - 1) {
      if (isLastLesson) {
        setShowPopup(true);
      } else {
        onNextSlide();
      }
    } else {
      onNextSlide();
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleNextModule = () => {
    setShowPopup(false);
    window.location.href = nextModulePath;
  };

  return (
    <LessonContainer>
      <Title>{title}</Title>
      
      <CarouselContainer>
        {slides.map((slide, index) => (
          <Slide key={index} active={currentSlide === index}>
            <SlideContent>
              {slide.image && (
                <ImageContainer height={slide.imageHeight}>
                  <Image 
                    src={slide.image} 
                    alt={slide.imageAlt} 
                    fit={slide.imageFit}
                  />
                </ImageContainer>
              )}
              <ContentSection>
                <SlideTitle>{slide.title}</SlideTitle>
                {slide.content}
              </ContentSection>
            </SlideContent>
          </Slide>
        ))}
        
        <NavigationContainer>
          <Button onClick={onPrevSlide} disabled={currentSlide === 0}>
            Anterior
          </Button>
          <Dots>
            {slides.map((_, i) => (
              <Dot
                key={i}
                active={currentSlide === i}
                onClick={() => onGoToSlide(i)}
              />
            ))}
          </Dots>
          <Button onClick={handleNextSlide}>
            {currentSlide === slides.length - 1 ? "Próxima Aula" : "Próximo"}
          </Button>
        </NavigationContainer>
      </CarouselContainer>

      {showPopup && (
        <ModuleCompletionPopup
          onClose={handleClosePopup}
          onNextModule={handleNextModule}
        />
      )}
    </LessonContainer>
  );
} 