import "./App.css";
import Slider from "./Components/Slider";

function App() {
  const slides = [
    {
      id: 1,
      image: "img1.jpg",
      title: "Slide 1",
      description: "This is slide 1 description",
      link: "url",
      button: "Learn More",
    },
    {
      id: 2,
      image: "img2.jpg",
      title: "Slide 2",
      description: "This is slide 2 description",
      link: "url",
      button: "About Us",
    },
    {
      id: 3,
      image: "img3.jpg",
      title: "Slide 3",
      description: "This is slide 3 description",
      link: "url",
      button: "Contact Us",
    },
    {
      id: 4,
      image: "img4.jpg",
      title: "Slide 4",
      description: "This is slide 4 description",
      link: "url",
      button: "Visit Us",
    },
    {
      id: 5,
      image: "img5.jpg",
      title: "Slide 5",
      description: "This is slide 5 description",
      link: "url",
      button: "FAQ",
    },
    {
      id: 6,
      image: "img6.jpg",
      title: "Slide 6",
      description: "This is slide 6 description",
      link: "url",
      button: "Portfolio",
    },
  ];

  return (
    <>
      <div>ts-slider</div>
      <Slider slides={slides} />
    </>
  );
}

export default App;
