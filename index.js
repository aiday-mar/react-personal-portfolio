import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Components/HelloComponent';
import ButtonClick from './Components/ButtonComponent';
import './style.css';
import {request} from 'request';
import {puppeteer} from 'puppeteer';
//import {Greetings} from './Components/GreetingsComponent';
import ReactDOM from 'react-dom';
import Post from './Components/PostComponent'

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

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React', 
      isShow: true,
    };

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
  }
 
 // here we have this function called toggleShow, when it is called, we change the state of the current instance and set the isShow variable to the oppposite value of what it is.
  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
  };

  render() {

    const greeting = 'Welcome to your dashboard';
    return [

        <Hello name={this.state.name} />,
        <ButtonClick/>,
        <p>
          Start editing to see some magic happen :)
        </p>,
        // dependin on the state we show or not the greetings, and we can change the state by clicking on the button
        <div>
        {this.state.isShow ? <Greeting greeting={greeting} /> : null}
        <Button onClick={this.toggleShow} />
        </div>,
        //<Post items={preload} />,
    ];
  }
}

const Button = ({ onClick }) => (
  <button onClick={onClick} type="button">
    Toggle Show
  </button>
);

const Greeting = ({ greeting }) => <h1>{greeting}</h1>;

render(<App />, document.getElementById('root'));


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


