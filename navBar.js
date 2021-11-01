import React from "react";
import {
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";
import './style.css';


const NavBar = () => {
  return (
    <div style={{position: 'fixed', top: '0', width: '100%'}} className="Body">
      <div
        style={{
          fontSize: 30,
          backgroundColor: '#1f2833',
          color: '#ffffff',
          paddingTop: 20,
          paddingBottom: 10,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div style={{ backgroundColor: '#ffffff', marginRight : 10, borderRadius: 5, color : "#1f2833", padding : 5, fontSize : 22, fontFamily : "consolas"}}>
          &#60;Coding&#47;&#62;
        </div>
        Portfolio
      </div>
      <div>
        <div className="NavBar">
          <ul id="navigation-ul">
            <li id="navigation-li">
              <NavLink className="navbarLink" activeStyle={{ color:'#ffffff' }} style={{ color: '#ffffff', textDecoration: 'none', marginLeft : 40, padding:5, borderRadius: '5px', overflow: 'hidden'}} to="/">Home</NavLink>
            </li>
            <li id="navigation-li">
              <NavLink className="navbarLink" activeStyle={{ color:'#ffffff' }} style={{ color: '#ffffff', textDecoration: 'none', padding:5, borderRadius: '5px', overflow: 'hidden'}} to="/posts">Posts</NavLink>
            </li>
            <li id="navigation-li">
              <NavLink className="navbarLink" activeStyle={{ color:'#ffffff' }} style={{ color: '#ffffff', textDecoration: 'none', padding:5, borderRadius: '5px', overflow: 'hidden'}} to="/projects">Projects</NavLink>
            </li>
            <li id="navigation-li">
              <NavLink className="navbarLink" activeStyle={{ color:'#ffffff' }} style={{ color: '#ffffff', textDecoration: 'none', marginRight : 40, padding:5, borderRadius: '5px', overflow: 'hidden'}} to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
