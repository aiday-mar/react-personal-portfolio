import React from 'react';

class BackgroundImage extends React.Component {
  render() {
    const urls = {
      home: 'http://i.imgur.com/kJXRAZH.jpg',
      about: 'http://i.imgur.com/TaA1gj9.png'
    };
    const style = {
      position: 'fixed',
      top: 0,
      zIndex: -1000,
      backgroundColor: '#FFFEF4',
      width: '100%'
    };
   let src = urls[this.props.page];
  
   return <img src={src} style={style} />;
  }
}
export default BackgroundImage;