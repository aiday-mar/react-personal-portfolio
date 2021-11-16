import React from 'react';
import './../../style.css';

/*
<br />
<br />
<div className="block-effect">
  <div className="block-reveal-first">Aiday Marlen Kyzy</div>
  <div className="block-reveal-second">
    Software Development and Data Science
  </div>
</div>

<div className="ocean">
  <div className="wave"></div>,<div className="wave"></div>
</div>
*/

export default class Intro extends React.Component {
  render() {
    return (
      <div className="animation">
        <div style={{ height: '40%', position: 'relative', top: '200px' }}>
          <div className="tracking-in-expand" style={{ color: 'white' }}>
            Portfolio
          </div>
        </div>
      </div>
    );
  }
}
