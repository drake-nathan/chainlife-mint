import styled, { keyframes } from 'styled-components';

export const FadeIn = keyframes`0% {opacity: 0;}
100% {opacity: 100;}`;

export const StepContainer = styled.div`
  position: absolute;
  top: 10%;
  z-index: 20;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;
  font-size: 16px;
  background: rgba(244, 245, 240, 0.95);
  max-width: 650px;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  animation-name: ${FadeIn};
  animation-duration: 1s ease-in-out;
  @media (max-width: 550px) {
    font-size: 14px;
    max-width: 350px;
  }
`;

export const Step = styled.p``;
