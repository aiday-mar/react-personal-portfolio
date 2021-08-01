import React from 'react';
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
// 5 seconds before the next slide is shown
const delay = 5000;

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

  // after dom created we return from the first slide 
  React.useEffect(() => {
    resetTimeout();
    // access the current value of the timeout 
    // supposing we have 3 colors and hence we have prevIndex now 2,
    // then we need to move to the zero index, otherwise to the next index
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {colors.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundColor }}
          ></div>
        ))}
      </div>
      
      <div className="slideshowDots"> {colors.map((_, idx) => (
          <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
