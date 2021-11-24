# Personal Portfolio detailing my coding projects, and created using the React library

<b> Link </b> : https://aiday-marlen-kyzy.web.app/

![Alt text](Capture.png?raw=true "Title")

This portfolio website is built using React. This website has several key features.


<b> Routing </b>


The routing in this portfolio is made with the react-router-dom library, specifically using the Switch and Route components. In order to be able to access the posts on this site, I parse the request URL by fetching the article corresponding to the ID in the URL, as follows :

```
<Switch> <Route path='/post/:id' component={Post} /> </Switch>
```

<b> Navigation Bar </b>


The navigation bar is configured to be sticky, so that it sticks to the top of the navigation window.


<b> Introductory CSS animation </b>


The CSS animations is displayed only once per session, and only when one accesses the main page of the website. That is if a person access a specific article, even on a new session, the CSS animation will not be displayed. The constructor in the routing component is as follows :

```
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
```

In the render method we have:

```
render() {
    return (
      <div className='Body'>
        {this.state.animate && this.state.showIntro ? <Intro /> : null}
        ...
      </div>
    );
}
```

And we have the following ComponentDidMount method:

```
componentDidMount() {
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
```

<b> Material UI </b>


The cards visible on the home page are made using the Material UI library. The cards are arranged inside of a Box.


<b> Slideshow </b>


There is a slideshow on the main page where I introduce myself. The code for that is:

```
export default function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  return (
    <div className='slideshow' style={{ fontFamily: 'Arial Narrow' }}>
      <div
        className='slideshowSlider'
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div className='slide' key={index}>
            <div className='textInSlide' style={{ fontSize: 17 }}>
              {text[index]}
            </div>
          </div>
        ))}
      </div>
      <div className='slideshowDots'>
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
```
