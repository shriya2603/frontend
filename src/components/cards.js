import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Cards extends Component{
    render(){
      
        return(
          <cards>
            <div className="module1">
              <Link to="/qna"><h1>Module 1: Self efficacy</h1></Link>
            </div>
            <div className="whitebar1">
              <div className="star1"></div>
              <div className="star12"></div>
              <div className="star13"></div>
              <div className="star14"></div>
            </div>

            <div className="module2">
              <h1>Module 2: Building resilience</h1>
            </div>
            <div className="whitebar2">
            <div className="star2"></div>
            </div>

            <div className="module3">
              <h1>Module 3: Responding to changes</h1>
            </div>
            <div className="whitebar3">
            <div className="star3"></div>
            </div>

            <div className="module4">
              <h1>Module 4: Breathing</h1>
            </div>
            <div className="whitebar4">
            <div className="star4"></div>
            </div>

            <div className="module5">
              <h1>Module 5: Breathing</h1>
            </div>
            <div className="whitebar5">
            <div className="star5"></div>
            </div>

            <div className="module6">
              <h1>Module 6: Breathing</h1>
            </div>
            <div className="whitebar6">
            <div className="star6"></div>
            </div>

          </cards>
        );
    }
}

export default Cards;