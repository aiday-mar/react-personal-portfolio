import React from 'react';
import "./../../style.css"

export default class Intro extends React.Component {
  
  render() {
    return(
    <div className="animation">
      <div style={{height: '40%'}}>
      <div className="tracking-in-expand">
        Portfolio
      </div>
      
      <br/>
      <br/>
      <div className="block-effect">
        <div className="block-reveal-first">Aiday Marlen Kyzy</div>
        <div className="block-reveal-second">Software Development and Data Science</div>
      </div>
      </div>

      <div className="ocean">
        <div className="wave"></div>,
        <div className="wave"></div>
      </div>
    </div>
    )
  }
}