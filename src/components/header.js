import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from './nav';


class Header extends Component {
  render() {
    return (
        <header>
         <Nav/>   
         
             <div className="ellipse1"></div>
             <div className="ellipse2"></div>
             <div className="ellipse3"></div>
             <div className="ellipse4"></div>
             <div className="photo1">
         </div>
         <div className="head">
            <h1>Transform the way of life.</h1>
            <div>
            </div>
            <p> Never too old, never too bad, never too late, never too sick to start from scratch once again.</p> 
            <br/>
          <Link to="/signup"className="contact1"> Sign Up</Link>
          <Link to="/demo" className="contact2">Try Demo</Link>

        </div>
        </header>
    );
  }
}

export default Header;
