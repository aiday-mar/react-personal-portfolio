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

class Routing extends React.Component {
  
  constructor() {
    super()
    this.state = {
      animate : true,
    }
  }

  render() {
    return(
      <div className="Body">
        <div className="tracking-in-expand">
          Portfolio TO CHANGE
        </div>
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
    )
  }

  componentDidMount() {
    if(window.sessionStorage.getItem("firstLoadDone") === null) {
      this.setState({
        animate : true,
      })
      window.sessionStorage.setItem("firstLoadDone", 1)
    } else {
      this.setState({
        animate : true,
      })
    }
  }
}

render(<Routing/>, document.getElementById('routing'))
