import { useEffect, useState } from "react";
import "./Slider.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


type SliderProps = {
  slides: {
    id: number;
    image: string;
    title?: string;
    description?: string;
    link?: string;
    button?: string;
    alt:string
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
      <section aria-label="Slider Image Carousel" className="slider_container">
        <div className="slider_image">
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              overflow: "hidden",
            }}
          >
            {slides.map((eachImage, index) => (
              <img
                src={eachImage.image}
                alt={eachImage.alt}
                className="slider_image"
                aria-hidden={currentIndex !== index}
                style={{ translate: `${-100 * currentIndex}%` }}
                key={eachImage.id}
              />
            ))}
          </div>
          <div className="slider-content">
            <h2 aria-label="Slider Title">{slides[currentIndex].title}</h2>
            <p aria-label="Slider Description">
              {slides[currentIndex].description}
            </p>
            <a
              className="links"
              aria-label="Button Link"
              href={slides[currentIndex].link}
            >
              {slides[currentIndex].button}
            </a>
          </div>
        </div>
        <button
          onClick={handlePrevBtn}
          className="slider_image_btn"
          style={{ left: "0" }}
          aria-label="View Previous Image"
        >
          <FaArrowLeft
            aria-hidden
            style={{ color: "white", fontSize: "1.8rem", padding: "5px" }}
          />
        </button>
        <button
          onClick={handleNextBtn}
          className="slider_image_btn"
          style={{ right: "0" }}
          aria-label="View Next Image"
        >
          <FaArrowRight
            aria-hidden
            style={{ color: "white", fontSize: "1.8rem", padding: "5px" }}
          />
        </button>
        <div className="slider_controls">
          <div className="dots">
            {slides.map((_, index) => {
              return (
                <span
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={currentIndex === index ? "active" : ""}
                  aria-label={`View Image ${index + 1}`}
                ></span>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
