import React from 'react';

const colors = ['#ffffff', '#ffffff', '#ffffff'];
const text = [
  "Welcome to my portfolio! On this website you may find the work I have previously done in software engineering and data science. You can find my projects below as well as under 'projects'. You may also find my posts about what I learned under 'posts'. Click on the next dot to see more.",
  'I have obtained a masters degree in computational science and a bachelors degree in mathematics from EPFL. I am passionate about web design, data science and logic.',
  'I like to draw and play volleyball. I spend a lot of time with family and friends :).',
];
// 5 seconds before the next slide is shown

export default function Slideshow() {
  // variable which is available for the duration of the component
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    // if the value is not null
    if (timeoutRef.current) {
      // cancels a timeout previously established by calling setTimeout
      clearTimeout(timeoutRef.current);
    }
  }

  return (
    <div className="slideshow" style={{ fontFamily: 'Arial Narrow' }}>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div className="slide" key={index}>
            <div className="textInSlide" style={{ fontSize: 17 }}>
              {text[index]}
            </div>
          </div>
        ))}
      </div>
      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
