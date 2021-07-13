// Filter the necessary imports at the end 
import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import Intro from './Components/Main/Intro';
import Search from './Components/Main/Search';
import Slides from './Components/Main/Slides';
import './style.css';
import './styles/app.scss';

render(<Intro/>, document.getElementById('root'));
render(<Search/>, document.getElementById('search'));
render(<Slides/>, document.getElementById('slideshow'));