import React from 'react';
const colors = ["#ffffff", "#ffffff", "#ffffff"];
const text = ["On this website you may find the work I have done in software engineering and data science previously. My field of work so far spans development of Android Java apps, React, Angular, Ruby and Django Web apps, as well as ASP .NET apps written in C#. In the field of data analysis I have worked with R and Python, as well as the ML.NET library part of the ASP .NET Core framework.", "I have obtained a masters in computational science at EPFL and am passionate about web design", "Aiday Marlen Kyzy"]
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
    <div className="slideshow">
      <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {colors.map((backgroundColor, index) => (
          <div className="slide" key={index}>
            <div className="textInSlide" style = {{fontSize : 17}}>
              {text[index]}
            </div>
          </div>
        ))}
      </div>
      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
