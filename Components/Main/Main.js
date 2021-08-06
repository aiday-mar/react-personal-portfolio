import React from 'react';
import Intro from './Intro';
// import Search from './Search'; put in navbar and make a better search bar than what I have now
// import Slides from './Slides'; Create better carousel
import Demo from './Demo';
import Slideshow from './Slideshow';
 
// export default class Routing extends React.Component
export default function Main() {
  
  return([  
    <Slideshow />,
    <Demo />, 
  ])
}