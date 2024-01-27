import React from "react";

import * as St from "./SliderItem.styled";

interface Props {
  callback: (id: number) => void;
  callbackOut: () => void;
  children: React.ReactNode;
  id: number;
  slideClass: string;
  slideMargin: number;
  visibleSlides: number;
  zoomFactor: number;
}

const SliderItem: React.FC<Props> = ({
  callback,
  callbackOut,
  children,
  id,
  slideClass,
  slideMargin,
  visibleSlides,
  zoomFactor,
}) => (
  <>
    <St.SliderItemDiv
      className={slideClass}
      onMouseOut={callbackOut}
      onMouseOver={() => callback(id)}
      slideMargin={slideMargin}
      visibleSlides={visibleSlides}
      zoomFactor={zoomFactor}
    >
      {children}
    </St.SliderItemDiv>
  </>
);

export default SliderItem;
