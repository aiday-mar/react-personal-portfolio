import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Post extends React.Component {
  render() {
     return [
    <p key="title">{this.props.Title}</p>,
    <p key="author">{this.props.Author}</p>,
    ];
  }
}
