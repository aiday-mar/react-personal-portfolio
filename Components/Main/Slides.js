import React from 'react';
import { Fade }  from 'react-slideshow-image';

export default class Slides extends React.Component {
  
  render() {
    return (
        <Fade>
          <div>
            <img src='https://www.redsen-consulting.com/wp-content/uploads/Qu%E2%80%99est-ce-que-le-Big-Data.jpg' width="300px" display="block" margin="auto"/>
          </div>
          <div>
            <img src='https://i.pinimg.com/originals/ac/79/9a/ac799a3e936973d079afecdc293c6809.jpg' 
            width="300px" display="block" margin="auto"/>
          </div>
          <div>
            <img 
            src='https://cdn.cdnparenting.com/articles/2020/11/01194956/1588916176.jpg' 
            width="300px" display="block" margin="auto"/>
          </div>
        </Fade>
    )
  }
}