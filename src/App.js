import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import ProductListing from './components/ProductListing';
import Details from './components/Details';
import BuyNow from './components/BuyNow';
import Sell from './components/Sell';
import EditListing from './components/EditListing';
import UserProfile from './components/UserProfile';
import PageNotFound from './components/PageNotFound';
import Login from './components/authentication/login';
import LoginSuccess from './components/authentication/loginsuccess';
import Signup from './components/authentication/signup';
import SignUpSucess from './components/authentication/SignUpSuccess';
// import {BrowserRouter as Router} from 'react-router-dom';
import PrivateRoute from './hocs/PrivateRoute';
// import UnPrivateRoute from './hocs/UnPrivateRoute';
import Modal from './components/Modal/Modal'



class App extends Component {
  state = {
    user: null,
    filter: null,
    showModal: false,
    modalMessage: null
  }


  setUser = (e) => {
    this.setState({ user: e })
  }

  onFilter = (event) => {
    this.setState({ filter: event });
  }

  toggleModal = (event) => {
    this.setState({ showModal: event });
  }

  render() {
    return (
      <React.Fragment>
        <Modal message={this.state.modalMessage} showModal={this.state.showModal} />
        <Navbar setFilter={(event) => this.onFilter(event)} />
        <Switch>
          <Route exact path="/" render={() => (
            <ProductListing filter={this.state.filter} />
          )} />
          <Route path="/:itemID/details" component={Details} />

          <PrivateRoute toggleModal={(event) => this.toggleModal(event)} path="/:itemID/buynow" component={BuyNow} />
          <PrivateRoute path="/sell" component={Sell} />

          <PrivateRoute path="/:itemID/editlisting" component={EditListing} />
          <PrivateRoute path="/:userID/userprofile" component={UserProfile} />

          <Route path="/login" render={() => (
            <Login setUser={(event) => this.setUser(event)} />
          )} />
          <Route path="/loginsuccess" component={LoginSuccess} />
          <Route path="/signup" component={Signup} />
          <Route path="/signupsucess" component={SignUpSucess} />

          <Route component={PageNotFound} />
        </Switch>
      </React.Fragment>

    );
  }
}

export default App;

