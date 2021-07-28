import React from 'react';
import { render } from 'react-dom';
import Main from './Components/Main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class Routing extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

render(<Routing/>, document.getElementById('routing'))
// render(<Intro/>, document.getElementById('root'));
// render(<Search/>, document.getElementById('search'));
// render(<Slides/>, document.getElementById('slideshow'));