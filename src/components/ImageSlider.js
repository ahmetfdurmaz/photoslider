import React from "react";
import { useState, useEffect } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Auto Slide
  let slideInterval;
  function auto() {
    slideInterval = setInterval(next, 3500);
  }

  useEffect(() => {
    const autoScroll = true;
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [current]);

  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prev} />
      <FaArrowAltCircleRight className="right-arrow" onClick={next} />
      <div className="buttons">
        <button
          type="radio"
          className={current === 0 ? "button active" : "button"}
          onClick={() => setCurrent(0)}
        />
        <button
          type="radio"
          className={current === 1 ? "button active" : "button"}
          onClick={() => setCurrent(1)}
        />
        <button
          type="radio"
          className={current === 2 ? "button active" : "button"}
          onClick={() => setCurrent(2)}
        />
        <button
          type="radio"
          className={current === 3 ? "button active" : "button"}
          onClick={() => setCurrent(3)}
        />
        <button
          type="radio"
          className={current === 4 ? "button active" : "button"}
          onClick={() => setCurrent(4)}
        />
      </div>

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="image" className="image" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
