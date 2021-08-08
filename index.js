import React from 'react';
import { render } from 'react-dom';
import Main from './Components/Main/Main';
import Posts from './Components/Posts/Posts';
import Projects from './Components/Projects/Projects';
import Intro from './Components/Intro/Intro';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useEffect } from 'react';
import NavBar from "./navBar.js";
import "./style.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import firebaseConfig from './firebase.config.js';
import firebase from "firebase";

firebase.initializeApp(firebaseConfig);

class Routing extends React.Component {
  
  constructor() {
    super()
    this.state = {
      animate : true,
      showIntro : true,
    }
    this.myRef = React.createRef() 
  }

  render() {
    return(
        <div className="Body">
          { this.state.animate && this.state.showIntro ? <Intro /> : null }
          <div ref={this.myRef}>
            <div style={{fontSize:30, textAlign: "center"}}> Portfolio </div>
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
    )
  }

  componentDidMount() {

    AOS.init()
    if(window.sessionStorage.getItem("firstLoadDone") === null) {
      this.setState({
        animate : true,
      })
      window.sessionStorage.setItem("firstLoadDone", 1)
    } else {
      this.setState({
        animate : false,
      })
    }
    
    if(this.state.animate == true) {

      setTimeout(() => {
        this.myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setTimeout(() => {
          this.state.showIntro = false;
          this.forceUpdate();
        }, 1000);
      }, 8000);
    }
  }
}

render(<Routing/>, document.getElementById('routing'))
