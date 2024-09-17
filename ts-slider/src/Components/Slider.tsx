import { useState } from "react";

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
        </div>
        <button onClick={handlePrevBtn}>Prev</button>
        <button onClick={handleNextBtn}>Next</button>
      </div>
    </>
  );
};

export default Slider;
