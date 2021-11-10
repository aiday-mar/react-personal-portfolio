import React from 'react';
import Demo from './Demo';
import Slideshow from './Slideshow';

export default class Main extends React.Component {
  render() {
    return [<Slideshow />, <Demo />];
  }
}
