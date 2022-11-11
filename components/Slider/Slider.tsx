import React, { useState, useEffect, useRef } from 'react';
import SliderItem from './SliderItem';
import * as IoIcons from 'react-icons/io5';
import * as St from './Slider.styled';
import { numberOfSlides } from './sliderHelpers';

interface Props {
  children?: any;
}

const Slider: React.FC<Props> = ({ children }) => {
  const zoomFactor = 10;
  const slideMargin = 0;
  const maxVisibleSlides = 3;
  const pageTransition = 500;

  const [currentPage, setCurrentPage] = useState(0);
  const [transformValue, setTransformValue] = useState(`-${zoomFactor / 2}%`);
  const [scrollSize, setScrollSize] = useState(0);

  const sliderRef = useRef<HTMLElement>(null);

  const visibleSlides = numberOfSlides(maxVisibleSlides, scrollSize);
  // Pages start at 0, therefore -1 at the end here
  const totalPages: number = Math.ceil(children.length / visibleSlides) - 1;

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      setScrollSize(entries[0].contentRect.height);
    });
    resizeObserver.observe(sliderRef.current!);
  }, [sliderRef]);

  // Position slider on resize
  useEffect(() => {
    if (currentPage < 0) {
      setCurrentPage(0);
    }

    if (sliderRef && sliderRef.current) {
      if (currentPage > totalPages) setCurrentPage(totalPages);
      sliderRef.current.style.transform = `translate3D(0, -${
        currentPage * scrollSize
      }px, 0)`;
    }
  }, [sliderRef, currentPage, scrollSize, totalPages]);

  // Have to disable hover effect on slides when flipping page
  // Otherwise it will look ugly when mouse hovers over the slides
  const disableHoverEffect = () => {
    if (sliderRef.current) sliderRef.current.style.pointerEvents = 'none';
    setTimeout(() => {
      if (sliderRef.current) sliderRef.current.style.pointerEvents = 'all';
    }, pageTransition);
  };

  const handleSlideMove = (forward: boolean) => {
    disableHoverEffect();
    setCurrentPage(currentPage + (forward ? 1 : -1));

    if (sliderRef.current)
      sliderRef.current.style.transform = `translate3D(0, -${
        (currentPage + (forward ? 1 : -1)) * scrollSize
      }px, 0)`;
  };

  const handleMouseOver = (id: number) => {
    if (id % visibleSlides === 1) setTransformValue('0%'); // left
    if (id % visibleSlides === 0) setTransformValue(`0%`); // right
  };

  const handleMouseOut = () => {
    setTransformValue(`-${zoomFactor / 2}%`);
  };

  const assignSlideClass = (index: number, visibleSlides: number) => {
    const classes = ['right', 'left'];
    return classes[index % visibleSlides] || '';
  };

  return (
    <St.SliderWrapper
      zoomFactor={zoomFactor}
      visibleSlides={visibleSlides}
      slideMargin={slideMargin}
    >
      <div className="button-wrapper back">
        <button
          disabled={currentPage < 1 ? true : false}
          className={currentPage < 1 ? 'button back disabled' : 'button back'}
          onClick={() => handleSlideMove(false)}
        >
          <IoIcons.IoCaretUpCircleOutline />
        </button>
      </div>
      <St.InnerWrapper>
        <St.SliderDiv
          visibleSlides={visibleSlides}
          transformValue={transformValue}
          zoomFactor={zoomFactor}
          slideMargin={slideMargin}
          pageTransition={pageTransition}
          ref={sliderRef}
        >
          {children.map((child: any, i: number) => (
            <SliderItem
              key={i}
              slideMargin={slideMargin}
              visibleSlides={visibleSlides}
              zoomFactor={zoomFactor}
              slideClass={assignSlideClass(i + 1, visibleSlides)}
              id={i + 1}
              callback={handleMouseOver}
              callbackOut={handleMouseOut}
            >
              {child}
            </SliderItem>
          ))}
        </St.SliderDiv>
      </St.InnerWrapper>
      <div className="button-wrapper forward">
        <button
          className={
            currentPage === totalPages ? 'button forward disabled' : 'button forward'
          }
          onClick={() => handleSlideMove(true)}
        >
          <IoIcons.IoCaretDownCircleOutline />
        </button>
      </div>
    </St.SliderWrapper>
  );
};

export default Slider;
