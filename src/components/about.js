import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class About extends Component{
    render(){
        return(
            <about>
                <div className="mampic"></div>
         <div className="content2">
            <section>
                <h1> About founder & Initiative </h1>
                <p>
                All of this text is editable. Simply click in the paragraph or heading text and start typing.All of this text is editable. Simply click anywhere in the paragraph or heading text and start typing. All of this text is editable. Simply click anywhere in the paragraph or heading text and start typing. All of this text is editable. Simply click anywhere in the paragraph or heading text and start typing. All of this text is editable. Simply click anywhere in the paragraph or heading text and start typing. 
                </p>
                <br/>
          <Link to="/signup"><a className="thesis"> THESIS</a></Link>
            </section>
        </div>  
        </about>      
        );
    }
}

export default About;