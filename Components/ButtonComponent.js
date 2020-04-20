import React, { Component } from 'react';

// this is a component called square 
// when I added export default into the class definition in the beginning 
// suddely the button Square appears 
export default class Button extends React.Component {
  // constructor takes in argument called props
  constructor(props) {
    // the super class must also be instantiated with the correct arguments
    super(props);
    // change the state of this instance
    this.state = {
      // there is a state property, which itself has a sub-value variable
      value: "click me!",
    };
  }

  // function to render this class, it returns an HTML
  render() {
    return (
      <button
        // the name of the button which is returned, it is a link to the previous class name 
        className="button"
        // you change the state of this class on the onclick
        // now when you click on the button above it actually outputs an X because the value of the state chanegs
        onClick={() => this.setState({value: 'clicked!'})} >
        {this.state.value}
      </button>
    );
  }
}