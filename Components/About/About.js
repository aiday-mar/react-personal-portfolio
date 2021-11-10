import React from 'react';
import './../../style.css';

export default class About extends React.Component {
  render() {
    return (
      <div
        className="container-article"
        style={{
          marginTop: 30,
          fontFamily: 'Arial Narrow',
          display: 'block',
        }}
      >
        <a
          href="https://github.com/aiday-mar?tab=repositories"
          className="fa fa-github"
          style={{ fontSize: 25, color: 'black', textDecoration: 'none' }}
        ></a>
        <a
          href="https://github.com/aiday-mar?tab=repositories"
          style={{ marginLeft: '20px' }}
        >
          https://github.com/aiday-mar?tab=repositories
        </a>
        <br />
        <br />
        <a
          href="https://www.linkedin.com/in/aiday-marlen-kyzy/"
          className="fa fa-linkedin"
          style={{ fontSize: 25, color: 'black', textDecoration: 'none' }}
        ></a>
        <a
          href="https://www.linkedin.com/in/aiday-marlen-kyzy/"
          style={{ marginLeft: '20px' }}
        >
          https://www.linkedin.com/in/aiday-marlen-kyzy/
        </a>
        <br />
        <br />
        Location : Renens, Switzerland
      </div>
    );
  }
}
