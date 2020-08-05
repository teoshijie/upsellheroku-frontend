import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import ProductListing from './components/ProductListing';
import Details from './components/Details';
import BuyNow from './components/BuyNow';
import Sell from './components/Sell';
import EditListing from './components/EditListing';
import PageNotFound from './components/PageNotFound';
import Login from './components/authentication/login';
import LoginSuccess from './components/authentication/loginsuccess';
import Signup from './components/authentication/signup';
import SignUpSucess from './components/authentication/SignUpSuccess';
import {BrowserRouter as Router} from 'react-router-dom';
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';


class App extends Component{

  render() {
    return (
      <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductListing} />
            <Route path="/:itemID/details" component={Details} />
            
            <PrivateRoute path="/:itemID/buynow" component={BuyNow} />
            <PrivateRoute path="/sell" roles={["user"]} component={Sell} />
            <PrivateRoute path="/:itemID/editlisting" component={EditListing} />
            {/* <PrivateRoute path="/profile" component={Profile} /> */}

            <Route path="/login" component={Login}/>
            <Route path = "/loginsuccess" component = {LoginSuccess}/>
            <Route path = "/signup" component={Signup}/>
            <Route path = "/signupsucess" component = {SignUpSucess}/>
      
            <Route component={PageNotFound} />
          </Switch>       
      </React.Fragment>
       
    );
  }
}

export default App;

