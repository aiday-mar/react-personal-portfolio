import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Components/HelloComponent';
import ButtonClick from './Components/ButtonComponent';
import './style.css';
import {request} from 'request';
import {puppeteer} from 'puppeteer';
//import {Greetings} from './Components/GreetingsComponent';
import ReactDOM from 'react-dom';
import Post from './Components/PostComponent';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import BackgroundImageComponent from './Components/BackgroundImageComponent';
import { Router, Route } from 'react-router-dom';
import ViewSlider from 'react-view-slider';
import {Fade } from 'react-slideshow-image';
import MovieApp from './Components/MovieApp';
import './styles/app.scss';
import Search from './Components/SearchComponent';

// below we create a map of different key-value pars in the json format
// and we will display this in the class below
const preload = {
  "data" : [
    {
      "name": "Reactjs",
      "url": "https://reactjs.org",
      "description": "A JavaScript library for building user interfaces",
    },
    {
      "name": "Vuejs",
      "url": "https://vuejs.org",
      "description": "The Progressive JavaScript Framework",
    },
    {
      "name": "Emberjs",
      "url": "https://www.emberjs.com",
      "description": "Ember.js is an open-source JavaScript web framework, based on the Model–view–viewmodel pattern"
    }
  ]
}

// -----------------------
const fadeImages  = [
  'https://i.ytimg.com/vi/oonOU78WGqM/hqdefault.jpg',
  'https://i.ytimg.com/vi/yvYOcG9cdQw/hqdefault.jpg',
  'https://www.design.iastate.edu/wp-content/uploads/2017/11/RuralHealth-360x360.jpg'
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}
// ---------------------------------------
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React', 
      isShow: true,
      amount: 0, // in this way of writing you do not have to define the type of the variable
    };

  }
 
 // here we have this function called toggleShow, when it is called, we change the state of the current instance and set the isShow variable to the oppposite value of what it is.
  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
  };

  // here you have functions defined inside the component.
  onIncrement = () => {
      this.setState(state => ({ amount: state.amount + 1 }));
  };
  onDecrement = () => {
    this.setState(state => ({ amount: state.amount - 1 }));
  };

  render() {
    
    //const greeting = 'Welcome to your dashboard';
    const subject = "React";
    // this is the default description of what we want to show the user
    const description = "Earth is our home";

    // we put the return elements in an array but we could also 
    // put it into a fragment
    return [

        <Hello name={this.state.name} />,
        // this is an imported button click from another component
        <ButtonClick/>,
        <p>
          Start editing to see some magic happen :)
        </p>,
        // dependin on the state we show or not the greetings, and we can change the state by clicking on the button
        // depending on the value of the isShow boolen we either render a greeting or not, the greeting is written below

        <div>
        {this.state.isShow ? <Greeting subject={subject} description={description} /> : null}
        <Button onClick={this.toggleShow} />
        </div>,
        // in the above the Button component renders the button but the function changing the state is defined in the class itself.
        //<Post items={preload} />,
         <div>
            <button type="button" onClick={this.onIncrement}>
              +
            </button>
            <button type="button" onClick={this.onDecrement}>
              -
            </button>
            <p>US Dollar: {this.state.amount}</p>
        </div>,
        <Slideshow/>,
    ];
  }
}

const Button = ({ onClick }) => (
  <button onClick={onClick} type="button">
    Toggle Show
  </button>
);

const Greeting = ({ subject, description }) => {
  // when the subject is null then we make the subject equal to Earth
  subject = subject || 'Earth';
  return (
    // we embed the subject variable into this string 
    <div>
      <Title title={`Welcome to ${subject}`} />
      <Description description={description} />
    </div>
  );
};

// we return the variable value but we return it in the corresponding 
// HTML tags 
const Title = ({ title }) => <h1>{title}</h1>;
const Description = ({ description }) => <p>{description}</p>;

// --------------
const User = ({ user }) => (
  <Profile
    user={user}
    avatar={<AvatarRound user={user} />}
    biography={<BiographyFat user={user} />}
  />
);
const Profile = ({ user, avatar, biography }) => (
  <div className="profile">
    <div>{avatar}</div>
    <div>
      <p>{user.name}</p>
      {biography}
    </div>
  </div>
);
const AvatarRound = ({ user }) => (
  <img className="round" alt="avatar" src={user.avatarUrl} />
);
const BiographyFat = ({ user }) => (
  <p className="fat">{user.biography}</p>
);

// here you have short  paragraphs which are returned by these little functions
const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;

const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;

// you define the router path when you render the component

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
          <h2>First Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
          <h2>Second Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
          <h2>Third Slide</h2>
        </div>
      </Fade>
    </div>
  )
}

render(<Search/>, document.getElementById('search'));
render(<App/>, document.getElementById('root'));
ReactDOM.render(<MovieApp />, document.getElementById('app'));

// ----
    /*
    const puppeteer = require('puppeteer');
    // the webiste from which we are scraping
    let bookingUrl = 'https://www.booking.com/city/us/new-york.en-gb.html?utm_source=social&utm_medium=facebook&utm_campaign=pagepost20130602&utm_term=nyc;label=socnet_fb_fp_newyork';
    (async () => {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 926 });
        await page.goto(bookingUrl);

        // get hotel details
        let hotelData = await page.evaluate(() => {
          // new array of hotel details
            let hotels = [];
            // get the hotel elements that have that div class name
            let hotelsElms = document.querySelectorAll('div.sr_property_block[data-hotelid]');
            // get the hotel data
            hotelsElms.forEach((hotelelement) => {
                let hotelJson = {};
                try {
                    hotelJson.name = hotelelement.querySelector('span.sr-hotel__name').innerText;
                    hotelJson.reviews = hotelelement.querySelector('span.review-score-widget__subtext').innerText;
                    hotelJson.rating = hotelelement.querySelector('span.review-score-badge').innerText;
                    if(hotelelement.querySelector('strong.price')){
                        hotelJson.price = hotelelement.querySelector('strong.price').innerText;
                    }
                }
                catch (exception){

                }
                hotels.push(hotelJson);
            });
            return hotels;
        });
        // output the hotel data into the console.
        console.dir(hotelData);
    })();
    // end of scrapper
    */
/*
const puppeteer = require('puppeteer');

let bookingUrl = 'https://www.booking.com/city/us/new-york.en-gb.html?utm_source=social&utm_medium=facebook&utm_campaign=pagepost20130602&utm_term=nyc;label=socnet_fb_fp_newyork';
(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 926 });
    await page.goto(bookingUrl);

    // get hotel details
    let hotelData = await page.evaluate(() => {
        let hotels = [];
        // get the hotel elements
        let hotelsElms = document.querySelectorAll('div.sr_property_block[data-hotelid]');
        // get the hotel data
        hotelsElms.forEach((hotelelement) => {
            let hotelJson = {};
            try {
                hotelJson.name = hotelelement.querySelector('span.sr-hotel__name').innerText;
                hotelJson.reviews = hotelelement.querySelector('span.review-score-widget__subtext').innerText;
                hotelJson.rating = hotelelement.querySelector('span.review-score-badge').innerText;
                if(hotelelement.querySelector('strong.price')){
                    hotelJson.price = hotelelement.querySelector('strong.price').innerText;
                }
            }
            catch (exception){

            }
            hotels.push(hotelJson);
        });
        return hotels;
    });

    console.dir(hotelData);
})();
/*
const request = require('request');
const cheerio = require('cheerio');
let scoreArr = titleArr = [];
request('https://www.reddit.com/r/javascript/', (err, res, body) => {
  //Load HTML body into cheerio
  const $ = cheerio.load(body);
  //Scrape karma scores
  $(`.score`).attr(`title`, (i, val) => {
    scoreArr.push(val);
  });
  //Scrape post titles
  $(`a.title`).forEach((el) => {
    titleArr.push(el.text());
  });
});
console.log(scoreArr);
//[12, 134, ...] Scores of top posts of r/movies at time of writing
console.log(titleArr);
//["Showoff Saturday...", "Making the globe...", ...]

// when the app is just lauched we do a web sraping
/*
let cheerio = require('cheerio')
let $ = cheerio.load('https://www.goodnewsnetwork.org/')

var postList = [];

$('.td_block_inner .td-block-row').each(function(index, element){
	postList[index] = {};
	postList[index]['td-block-span6'] = $(a).find('[rel=bookmark]').text();
});

console.log(postList); // Output the data in the terminal

/*
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request("https://www.reddit.com", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);

  $('div#siteTable > div.link').each(function( index ) {
    var title = $(this).find('p.title > a.title').text().trim();
    var user = $(this).find('a.author').text().trim();
  });

});
*/


