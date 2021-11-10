import React from 'react';
import { render } from 'react-dom';
import Main from './Components/Main/Main';
import Project from './Components/Projects/Project';
import Post from './Components/Posts/Post';
import Posts from './Components/Posts/Posts';
import Projects from './Components/Projects/Projects';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './navBar.js';
import './style.css';
import 'aos/dist/aos.css';

class Routing extends React.Component {
  constructor() {
    super();
    this.state = {
      animate: true,
      showIntro: true,
    };
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div className="Body">
        {this.state.animate && this.state.showIntro ? <Intro /> : null}
        <div ref={this.myRef}>
          <Router>
            <div>
              {this.state.showIntro ? (
                <NavBar />
              ) : (
                <NavBar style={{ top: '0', position: 'sticky' }} />
              )}
              <Switch>
                <Route path="/projects" component={Projects} />
                <Route path="/posts" component={Posts} />
                <Route path="/post" component={Post} />
                <Route exact path="/" component={Main} />
                <Route exact path="/project" component={Project} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }

  componentDidMount() {
    //AOS.init();
    if (window.sessionStorage.getItem('firstLoadDone') === null) {
      this.setState({
        animate: true,
      });
      window.sessionStorage.setItem('firstLoadDone', 1);
      document.body.style.overflow = 'hidden';
    } else {
      this.setState({
        animate: false,
      });
    }

    if (this.state.animate == true) {
      setTimeout(() => {
        this.myRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        setTimeout(() => {
          document.body.style.overflow = 'unset';
          this.state.showIntro = false;
          this.forceUpdate();
        }, 1000);
      }, 6000);
    }
  }
}

render(<Routing />, document.getElementById('routing'));
