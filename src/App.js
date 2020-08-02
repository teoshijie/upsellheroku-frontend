import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import ProductListing from './components/ProductListing';
import Details from './components/Details';
import BuyNow from './components/BuyNow';
import EditListing from './components/EditListing';
import PageNotFound from './components/PageNotFound';
//Shi Jie's 
import Login from './components/authentication/login';
import LoginSuccess from './components/authentication/loginsuccess';
import Signup from './components/authentication/signup';
import SignUpSucess from './components/authentication/SignUpSuccess';
import Profile from './components/profile';
import {BrowserRouter as Router} from 'react-router-dom';


class App extends Component{

  render() {
    return (
      <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductListing} />
            <Route path="/details" component={Details} />
            <Route path="/buynow" component={BuyNow} />
            <Route path='/editlisting' component={EditListing} />
            <Route path = "/login" component = {Login}/>
            <Route path = "/loginsuccess" component = {LoginSuccess}/>
            <Route path = "/signup" component = {Signup}/>
            <Route path = "/signupsucess" component = {SignUpSucess}/>
            <Route path = "/profile" component = {Profile}/>
            <Route component={PageNotFound} />
          </Switch>       
      </React.Fragment>
       
    );
  }
}

export default App;