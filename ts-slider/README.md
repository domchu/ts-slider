 Responsive Slider Component(React + TypeScript + Vite)

 A fully customizable and responsive slider component built with TypeScript, React, and React Icons. This component is designed for easy integration into your React projects, providing a smooth and efficient slider with full responsiveness across devices.

 INSTALLATION

install the package via npm:
 npm install ts-slider

 or using yarn:
 yarn add ts-slider

 USAGE
Once installed, you can import and use the slider in your project as follows:


EXAMPLE:

import React from 'react';
import Slider from './Slider';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const App: React.FC = () => {
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
    ...
  ];

  return (
    <div>
      <h1>Responsive Slider Demo</h1>
      <Slider
        slides={slides}
      />
    </div>
  );
};

export default App;



FEATURES

Fully responsive: Adapts to different screen sizes automatically.
Customizable: Easily change icons and slide content.
Autoplay: Optionally enable automatic slide transitions.

LICENSE
This package is open-source and licensed under the MIT License.