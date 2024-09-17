import { useEffect, useState } from "react";
import "./Slider.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import {} from "react-icons/fa";

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

  // AUTO SLIDE
  useEffect(() => {
    const currentImage = setInterval(() => {
       setCurrentIndex((index) => {
         if (index === slides.length - 1) {
           return 0;
         }
         return index + 1;
       });
    }, 4000);
    return () => clearInterval(currentImage);
  }, [currentIndex])


  // Next Btn
  const handleNextBtn = () => {
    const nextIndex = (currentIndex + 1) % slides.length
    setCurrentIndex(nextIndex)
  };
  // prev Btn
  const handlePrevBtn = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <>
      <div className="slider_container">
        <div className="slider_image">
          <div style={{ width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
            {slides.map((eachImage) => (
              
            <img
              src={eachImage.image}
              alt="Slider Image"
              className="slider_image"
              style={{ translate: `${-100 * currentIndex }%`}}
            />
            ))}
          </div>
          <div className="slider-content">
            <h2>{slides[currentIndex].title}</h2>
            <p>{slides[currentIndex].description}</p>
            <a className="links" href={slides[currentIndex].link}>
              {slides[currentIndex].button}
            </a>
          </div>
        </div>
        <button
          onClick={handlePrevBtn}
          className="slider_image_btn"
          style={{ left: "0" }}
        >
          <FaArrowLeft
            style={{ color: "white", fontSize: "1.8rem", padding: "5px" }}
          />
        </button>
        <button
          onClick={handleNextBtn}
          className="slider_image_btn"
          style={{ right: "0" }}
        >
          <FaArrowRight
            style={{ color: "white", fontSize: "1.8rem", padding: "5px" }}
          />
        </button>
        <div className="slider_controls">
          <div className="dots">
            {slides.map((_, index) => {
              return (
                <span key={index}
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
