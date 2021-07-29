import React from 'react';
import Intro from './Intro';
import Search from './Search';
import Slides from './Slides';
import Demo from './Demo';
 
// export default class Routing extends React.Component
export default function Main() {
  
  return([     
    <Intro/>,
    <Search/>,
    <Slides/>,
    <Demo />
  ])
}