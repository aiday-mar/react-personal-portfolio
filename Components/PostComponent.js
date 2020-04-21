
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Post extends React.Component {
  render() {
     return [
      <React.Fragment>
        {props.items.data.map(item => (
          <React.Fragment key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.url}</p>
            <p>{item.description}</p>
          </React.Fragment>
        ))}
      </React.Fragment>
    ];
  }
}








