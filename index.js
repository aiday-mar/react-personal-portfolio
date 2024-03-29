import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main/Main';
import Project from './components/Projects/Project';
import Post from './components/Posts/Post';
import Posts from './components/Posts/Posts';
import Projects from './components/Projects/Projects';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './navBar.js';
import './style.css';
import 'aos/dist/aos.css';

class Routing extends React.Component {
  state = {
    loading: true,
  };

  constructor() {
    super();

    if (window.location.pathname === '/') {
      this.state = {
        animate: true,
        showIntro: true,
      };
    } else {
      this.state = {
        animate: false,
        showIntro: false,
      };
    }
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
                <Route exact path="/" component={Main} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/posts" component={Posts} />
                <Route path="/post/:id" component={Post} />
                <Route path="/project/:id" component={Project} />
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

    const el = document.querySelector('.loader-container');
    if (el) {
      el.remove(); // removing the spinner element
      this.setState({ loading: false }); // showing the app
    }

    if (window.location.pathname === '/') {
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
        }, 3000);
      }
    }
  }
}

render(<Routing />, document.getElementById('routing'));
