import React, { ReactEventHandler } from "react";
import "./style.css";
const DoubleVerticalSlider = () => {
  const [slidesLength, setSlidesLength] = React.useState(4);
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
  const [sliderHeight, setSliderHeight] = React.useState(0);

  const defaultLeftSlide = [
    {title: 'Nature flower', text: 'all in pink', backgroundColor: 'FD3555'},
    {title: 'Blue Sky', text: "with it's mountains", backgroundColor: '2A86BA'},
    {title: 'Lonely Castle', text: 'in the wilderness', backgroundColor: '252E33'},
    {title: 'Flying Eagle', text: 'in the sunset', backgroundColor: 'FFB866'},
  ]

  const sliderContainerRef = React.useRef<HTMLDivElement>(null);

  const handleUp = () => {
    if (sliderContainerRef.current) {
      setSliderHeight(sliderContainerRef.current.clientHeight);
      setActiveSlideIndex((activeSlideIndex) => activeSlideIndex + 1);
      if (activeSlideIndex >= slidesLength - 1) {
        setActiveSlideIndex(0);
      }
    }
  };

  const handleDown = () => {
    if (sliderContainerRef.current) {
      setSliderHeight(sliderContainerRef.current.clientHeight);
      setActiveSlideIndex((activeSlideIndex) => activeSlideIndex - 1);
      if (activeSlideIndex <= 0) {
        setActiveSlideIndex(slidesLength - 1);
      }
    }
  };
  console.log("activeSlideIndex", activeSlideIndex);
  return (
    <div className="slider-container" ref={sliderContainerRef}>
      <div
        className="left-slide"
        style={{
          top: `${-(slidesLength - 1) * 100}vh`,
          transform: `translateY(${activeSlideIndex * sliderHeight}px)`,
        }}
      >
        <div style={{ backgroundColor: "#FD3555" }}>
          <h1>Nature flower</h1>
          <p>all in pink</p>
        </div>
        <div style={{ backgroundColor: "#2A86BA" }}>
          <h1>Blue Sky</h1>
          <p>with it's mountains</p>
        </div>
        <div style={{ backgroundColor: "#252E33" }}>
          <h1>Lonely castle</h1>
          <p>in the wilderness</p>
        </div>
        <div style={{ backgroundColor: "#FFB866" }}>
          <h1>Flying eagle</h1>
          <p>in the sunset</p>
        </div>
      </div>
      <div
        className="right-slide"
        style={{
          transform: `translateY(-${activeSlideIndex * sliderHeight}px)`,
        }}
      >
        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80')",
          }}
        ></div>
        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80')",
          }}
        ></div>
        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80')",
          }}
        ></div>
        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80')",
          }}
        ></div>
      </div>
      <div className="action-buttons">
        <button className="down-button" onClick={() => handleDown()}>
          <i className="fas fa-arrow-down"></i>
        </button>
        <button className="up-button" onClick={() => handleUp()}>
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
};

export default DoubleVerticalSlider;
