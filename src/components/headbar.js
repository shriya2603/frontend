import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Headbar extends Component{
    render(){
        return(
            <headbar>
            <div className="bar1">
                
                <ul>
                    <li className="logo">ANAHAD </li>
                </ul>
                <ul>
                    
                    <li><Link to={"/demo"}>DEMO</Link></li>
                    <li><a href="www.google.com">ABOUT</a></li>
                    <li><Link to={"/login"}>LOGIN</Link></li>
                    
                </ul>
            </div>
            </headbar>
        );
    }
}

export default Headbar;