import React, { Component } from 'react';
import { Fade }  from 'react-slideshow-image';

export default class Slides extends React.Component {
  
  render() {
    return (
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <img src='https://www.redsen-consulting.com/wp-content/uploads/Qu%E2%80%99est-ce-que-le-Big-Data.jpg' />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src='https://i.pinimg.com/originals/ac/79/9a/ac799a3e936973d079afecdc293c6809.jpg' />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src='https://cdn.cdnparenting.com/articles/2020/11/01194956/1588916176.jpg' />
            </div>
          </div>
        </Fade>
      </div>
    )
  }
}