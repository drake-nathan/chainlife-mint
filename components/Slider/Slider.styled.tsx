import styled from 'styled-components';
import { SliderItemDiv } from './SliderItem.styled';

type SliderWrapperProps = {
  zoomFactor: number;
  visibleSlides: number;
  slideMargin: number;
};

type SliderProps = {
  visibleSlides: number;
  transformValue: string;
  zoomFactor: number;
  slideMargin: number;
  pageTransition: number;
  ref: any;
};

export const SliderWrapper = styled.div<SliderWrapperProps>`
  // overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  // margin-top: 2rem;
  width: 225px;
  // height: 906px;
  padding: ${(props) => (props.zoomFactor / props.visibleSlides) * 0.7 + '%'} 0;
  // margin-bottom: 2em;

  .button-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    box-sizing: border-box;
  }

  .button {
    background: none;
    border: 0;
    width: 48px;
    height: fit-content;
    color: ${(props) => props.theme.colors.textMain};
    font-size: 3.5rem;
    cursor: pointer;
    outline: none;
    transition: all 0.7s;
    user-select: none;
    :hover {
      opacity: 0.5;
    }
  }

  .disabled {
    color: ${(props) => props.theme.colors.textOffset};
    cursor: default;
    :hover {
      opacity: 1;
    }
  }

  .back {
  }

  .forward {
  }
`;

export const InnerWrapper = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SliderDiv = styled.div<SliderProps>`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 800px;
  padding-left: 15px;
  padding-right: 15px;
  transition: transform ${(props) => props.pageTransition}ms ease;

  :hover ${SliderItemDiv} {
    transform: translateY(${(props) => props.transformValue});
  }
  //::-webkit-scrollbar {
  //display: none;
  // }
`;
