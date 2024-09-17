type SliderProps = {
  slides: {
    id: number;
    image: string;
    title: string;
    description: string;
    link: string;
    button: string;
  };
};

const Slider = ({ slides }: SliderProps) => {
  return (
    <>
      <div className="slider-container"></div>
    </>
  );
};

export default Slider;
