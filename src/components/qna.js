import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Headbar from './headbar';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

class Qna extends Component{
    render(){
        return(
           <qna>
            <Headbar/>
            <div className="module1">
              <h1>Module 1: Breathing</h1>
            </div>
            <div className="whitebar1">
              <div className="star11"></div>
              <div className="star12"></div>
              <div className="star13"></div>
              <div className="star14"></div>
            </div>
            <div className="content1">
                    <h1>Module 1: Concentration</h1>
                    <p>
                        Write the purpose of this module
                    </p>
            </div>

            <div className="line"></div>

            <div className="ques1">
                <h1>1. What are the no. of triangles present in the below diagram?</h1>
                <div className="pic1"></div>
                <p>Options:</p>
            </div>
            
            <div className="radio">
            <RadioGroup onChange={ this.onChange } vertical>
                <RadioButton value="24">
                    24
                </RadioButton>
                <RadioButton value="12">
                    12
                </RadioButton>
                <RadioButton value="36">
                    36
                </RadioButton>
                <RadioButton value="33">
                    33
                </RadioButton>
                </RadioGroup>
                </div>

                <Link to=""className="submit"> Submit </Link>
           </qna> 
        );
    }
}

export default Qna;