import React, { Component } from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Main from './components/main';
import Login from'./components/login';
import Signup from './components/signup';
import Demo from './components/demo';
import Qna from './components/qna';


class App extends Component {
  render() {
    return (
      <div className="App">

         <Switch>
         <Route path="/" exact component={Main}/>
         <Route path="/login" exact component={Login}/>
         <Route path="/signup" exact component={Signup}/>
         <Route path="/demo" exact component={Demo}/>
         <Route path="/qna" exact component={Qna}/>
         </Switch>

      </div>
      

    );
  }
}

export default App;
