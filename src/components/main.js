import React, { Component } from 'react';
import Header from './header';
import Body from './body';
import About from './about';
import Footer from './footer';

class Main extends Component{
    render() {
        return(
        <div className="container">
            <Header/>
            <Body/>
            <About/>
            <Footer/>
        </div>
        )
    }
}

export default Main;