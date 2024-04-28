import styled from "styled-components";

import { SliderItemDiv } from "./SliderItem.styled";

interface SliderWrapperProps {
  slideMargin: number;
  visibleSlides: number;
  zoomFactor: number;
}

interface SliderProps {
  pageTransition: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any;
  slideMargin: number;
  transformValue: string;
  visibleSlides: number;
  zoomFactor: number;
}

export const SliderWrapper = styled.div<SliderWrapperProps>`
  // overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  gap: 30px;
  width: 225px;
  padding: ${(props) => (props.zoomFactor / props.visibleSlides) * 0.7 + "%"} 0;

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
  max-height: 649px;
  padding-left: 15px;
  padding-right: 15px;
  transition: transform ${(props) => props.pageTransition}ms ease;

  :hover ${SliderItemDiv} {
    transform: translateY(${(props) => props.transformValue});
  }
`;
