import { useState } from "react";
import "./Slider.css";

type SliderProps = {
  slides: {
    id: number;
    image: string;
    title: string;
    description: string;
    link: string;
    button: string;
  }[];
};

const Slider = ({ slides }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextBtn = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(nextIndex);
  };
  const handlePrevBtn = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <>
      <div className="slider_container">
        <div className="slider_image">
          <img
            src={slides[currentIndex].image}
            alt="Slider Image"
            className="slider_image"
          />
        </div>
        <div className="slider-content">
          <h2>{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].description}</p>
          <a className="links" href={slides[currentIndex].link}>
            {slides[currentIndex].button}
          </a>
        </div>
        <button
          onClick={handlePrevBtn}
          className="slider_image_btn"
          style={{ left: "0" }}
        >
          Prev
        </button>
        <button
          onClick={handleNextBtn}
          className="slider_image_btn"
          style={{ right: "0" }}
        >
          Next
        </button>
        <div className="slider_controls">
          <div className="dots">
            {slides.map((_, index) => {
              return (
                <span
                  key={slides[currentIndex].link}
                  onClick={() => setCurrentIndex(index)}
                  className={currentIndex === index ? "active" : ""}
                ></span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
