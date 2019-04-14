import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Headbar from './headbar';
import Cards from'./cards';

class Demo extends Component{
    render(){
        return(
            <demo>
                <Headbar/>
                <div className="userpic">
                    <h1>Ram Say</h1>
                    <p>
                        abc@gmail.com
                    </p>
                </div>
          <Link to=""className="editprofile"> Edit Profile</Link>
            <div className="line"></div>
                <Cards/>
            
                
            </demo>

        );
    }
}

export default Demo;