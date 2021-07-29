import React from 'react';
import { render } from 'react-dom';
import Main from './Components/Main/Main';
import Posts from './Components/Posts/Posts';
import Projects from './Components/Projects/Projects';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Routing() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/posts" component={Posts} />
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

render(<Routing/>, document.getElementById('routing'))

