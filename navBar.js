import React from "react";
import {
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="NavBar">
        <ul id="navigation-ul">
          <li id="navigation-li">
            <NavLink activeStyle={{ color:'#eee2dc' }} style={{ color: '#eee2dc', textDecoration: 'none', paddingLeft : 40}} to="/">Home</NavLink>
          </li>
          <li id="navigation-li">
            <NavLink activeStyle={{ color:'#eee2dc' }} style={{ color: '#eee2dc', textDecoration: 'none'}} to="/posts">Posts</NavLink>
          </li>
          <li id="navigation-li">
            <NavLink activeStyle={{ color:'#eee2dc' }} style={{ color: '#eee2dc', textDecoration: 'none'}} to="/projects">Projects</NavLink>
          </li>
          <li id="navigation-li">
            <NavLink activeStyle={{ color:'#eee2dc' }} style={{ color: '#eee2dc', textDecoration: 'none', paddingRight : 40}} to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
