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

class App extends Component{

  render() {
    return (
      <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductListing} />
            <Route path="/:itemID/details" component={Details} />
            <Route path="/buynow" component={BuyNow} />
            <Route path='/sell' component={Sell}/>
            <Route path='/editlisting' component={EditListing} />
            <Route component={PageNotFound} />
          </Switch>       
      </React.Fragment>
       
    );
  }
}

export default App;