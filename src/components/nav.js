import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo">ANAHAD </li>
          </ul>
          <ul>
              
              <li><Link to={"/demo"}>DEMO</Link></li>
              <li><a href="www.google.com">ABOUT</a></li>
              <li><Link to={"/login"}>LOGIN</Link></li>
              
          </ul>
      </nav>
    );
  }
}

export default Nav;
