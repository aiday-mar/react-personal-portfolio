import React from "react";
import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="NavBar">
        <ul id="navigation-ul">
          <li id="navigation-li">
            <NavLink activeStyle={{ color:'#000000' }} style={{ color: '#000000', textDecoration: 'none'}} to="/">Home</NavLink>
          </li>
          <li id="navigation-li">
            <NavLink activeStyle={{ color:'#000000' }} style={{ color: '#000000', textDecoration: 'none'}} to="/posts">Posts</NavLink>
          </li>
          <li id="navigation-li">
            <NavLink activeStyle={{ color:'#000000' }} style={{ color: '#000000', textDecoration: 'none'}} to="/projects">Projects</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
