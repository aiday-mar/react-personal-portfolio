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
            <NavLink className="navbarLink" activeStyle={{ color:'#eee2dc' }} style={{ color: '#eee2dc', textDecoration: 'none', marginLeft : 40, padding:5, borderRadius: '5px', overflow: 'hidden'}} to="/">Home</NavLink>
          </li>
          <li id="navigation-li">
            <NavLink className="navbarLink" activeStyle={{ color:'#eee2dc' }} style={{ color: '#eee2dc', textDecoration: 'none', padding:5, borderRadius: '5px', overflow: 'hidden'}} to="/posts">Posts</NavLink>
          </li>
          <li id="navigation-li">
            <NavLink className="navbarLink" activeStyle={{ color:'#eee2dc' }} style={{ color: '#eee2dc', textDecoration: 'none', padding:5, borderRadius: '5px', overflow: 'hidden'}} to="/projects">Projects</NavLink>
          </li>
          <li id="navigation-li">
            <NavLink className="navbarLink" activeStyle={{ color:'#eee2dc' }} style={{ color: '#eee2dc', textDecoration: 'none', marginRight : 40, padding:5, borderRadius: '5px', overflow: 'hidden'}} to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
