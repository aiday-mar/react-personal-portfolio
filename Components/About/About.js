import React from 'react';
import "./../../style.css"

export default class About extends React.Component {
  
  render() {
    return(
      <div className="container-article" style={{marginTop:30}}>
        GitHub : <a href="https://github.com/aiday-mar?tab=repositories"> https://github.com/aiday-mar?tab=repositories </a>
        <br/>
        LinkedIn : <a href="https://www.linkedin.com/in/aiday-marlen-kyzy/"> https://www.linkedin.com/in/aiday-marlen-kyzy/ </a>
        <br/>
        Location : Renens, Switzerland
      </div>
    );
  }
}