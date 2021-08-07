import React from 'react';
import "./../../style.css"

export default class Intro extends React.Component {
  
  render() {
    return(
    <div className="animation">
      <div className="tracking-in-expand">
        Portfolio
      </div>

      <h1 className="block-effect">
        <div className="block-reveal-first" >Software Development</div>
        <div className="block-reveal-second" >Data Analysis</div>
      </h1>

    </div>
    )
  }
}