// Filter the necessary imports at the end 
import React from 'react';
import { render } from 'react-dom';
import Intro from './Intro';
import Search from './Search';
import Slides from './Slides';

export default function Main () {

  return(
    <Intro/>,
    <Search/>,
    <Slides/>
  )
  //render(<Intro/>, document.getElementById('root'));
  //render(<Search/>, document.getElementById('search'));
  //render(<Slides/>, document.getElementById('slideshow'));

}