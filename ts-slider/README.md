 ## Responsive Slider Component(React + TypeScript + Vite)

---
 **A fully customizable and responsive slider component built with TypeScript, React, and React Icons. This component is designed for easy integration into your React projects, providing a smooth and efficient slider with full responsiveness across devices.**

---
 ### INSTALLATION

**install the package via npm:**
---
 **npm install ts-slider**

**or using yarn:**
 **yarn add ts-slider**

---
 ### USAGE
**Once installed, you can import and use the slider in your project as follows:**

### NOTE:
**The slides id must be a number**
**All slides image,title, description, link and button text must be a string**
**The title, description, link and button are all optional in the slides array of object, only image is a must**

---
### ICONS
**for Next button icon use <FaArrowRight/>**
**for previous button icon use <FaArrowLeft/> from react-icon library**

**installation.**
**npm install react-icons**


---
### FEATURES
1. Fully responsive: Adapts to different screen sizes automatically.
2. Customizable: Easily change icons and slide content.
3. Autoplay: enable automatic slide transitions of four(4) seconds/4000ms.

---
### LICENSE
**This package is open-source and licensed under the MIT License.**

### Github respository for source code
[github link](https://github.com/domchu/ts-slider)

---
### EXAMPLE:
---
```JSX
import React from 'react';
import Slider from './Slider';


const App = () => {
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
     // Add more slides here
  ];

  return (
    <div>
      <h1>Responsive Typescript Slider Demo</h1>
      <Slider
        slides={slides}
      />
    </div>
  );
};

export default App;


