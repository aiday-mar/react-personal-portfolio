import React from "react";
import {
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{top: '0',position: 'sticky', zIndex: '1'}}>
      <div
      style={{
        fontSize: 30,
        backgroundColor: '#1f2833',
        color: '#ffffff',
        paddingTop: 20,
        paddingBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Garamond',
      }}>
        <div style={{ backgroundColor: '#ffffff', marginRight : 10, borderRadius: 5, color : "#1f2833", padding : 5, fontSize : 22, fontFamily : "consolas"}}>
          &#60;Coding&#47;&#62;
        </div>
        Portfolio

        <div style={{textAlign: 'right', float: 'right', position:'absolute' ,right:40}}>
        <a href="https://github.com/aiday-mar?tab=repositories" className="fa fa-github" style={{fontSize: 25,paddingLeft: 20, color: 'white', textDecoration:'none'}}></a>
        <a href="https://www.linkedin.com/in/aiday-marlen-kyzy/" className="fa fa-linkedin" style={{fontSize: 25,paddingLeft: 20, color: 'white',  textDecoration:'none'}}></a>
        </div>
      </div>

      <div className="NavBar">
        <ul id="navigation-ul">
          <li id="navigation-li">
            <NavLink className="navbarLink" activeStyle={{ color:'#ffffff' }} style={{ color: '#ffffff', textDecoration: 'none', marginLeft : 40, padding:5, borderRadius: '5px', overflow: 'hidden', fontFamily: 'Arial Narrow'}} to="/">HOME</NavLink>
          </li>
          <li id="navigation-li">
            <NavLink className="navbarLink" activeStyle={{ color:'#ffffff' }} style={{ color: '#ffffff', textDecoration: 'none', padding:5, borderRadius: '5px', overflow: 'hidden', fontFamily: 'Arial Narrow'}} to="/posts">POSTS</NavLink>
          </li>
          <li id="navigation-li">
            <NavLink className="navbarLink" activeStyle={{ color:'#ffffff' }} style={{ color: '#ffffff', textDecoration: 'none', padding:5, borderRadius: '5px', overflow: 'hidden', fontFamily: 'Arial Narrow'}} to="/projects">PROJECTS</NavLink>
          </li>
          <li id="navigation-li">
            <NavLink className="navbarLink" activeStyle={{ color:'#ffffff' }} style={{ color: '#ffffff', textDecoration: 'none', marginRight : 40, padding:5, borderRadius: '5px', overflow: 'hidden', fontFamily: 'Arial Narrow'}} to="/about">AIDAY MARLEN KYZY</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
