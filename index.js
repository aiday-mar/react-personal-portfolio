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
    this.myRef = React.createRef() 
  }

  render() {
    return(
      // if animate is TRUE we return component which shows animation and then goes to main page, otherwise just show
      // the main page
      <div className="Body">
        <div className="animation">
          <div className="tracking-in-expand">
            Portfolio
          </div>
        </div>
        <Router ref={this.myRef}>
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

    // scroll to
    if(this.state.animate == true) {
      setTimeout(function() {
        window.scrollTo(0, this.myRef.current.offsetTop);
      }, 1000);
    }
  }
}

render(<Routing/>, document.getElementById('routing'))
