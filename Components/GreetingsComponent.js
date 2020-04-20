import React, { Component } from 'react';

export class Greetings extends React.Component {

  UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }

  GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }

  render(props){
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
}

render(
  // Try changing to isLoggedIn={true}:
  <Greetings isLoggedIn = {false} />,
  document.getElementById('greeting')
);
