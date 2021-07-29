import React from 'react';
import { render } from 'react-dom';
import Main from './Components/Main/Main';
import Posts from './Components/Posts/Posts';
import Projects from './Components/Projects/Projects';
import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from "./navBar.js";
import "./style.css"

function Routing() {
  return (
    <div className="App">
      <div className="Body">
        <Router>
          <div>
            <NavBar/>
            <Switch>
              <Route path="/projects" component={Projects} />
              <Route path="/posts" component={Posts} />
              <Route exact path="/" component={Main} />
            </Switch>
          </div>
        </Router>
      </div>
    </div> 
  );
}

render(<Routing/>, document.getElementById('routing'))

/*
<nav class="navigation">
          <ul>
            <li>
              <NavLink activeStyle={{ color:'#000000' }} style={{ color: '#000000' }} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color:'#000000' }} style={{ color: '#000000' }} to="/posts">Posts</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color:'#000000' }} style={{ color: '#000000' }} to="/projects">Projects</NavLink>
            </li>
          </ul>
        </nav>
        */