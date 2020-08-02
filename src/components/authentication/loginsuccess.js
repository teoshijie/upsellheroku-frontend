import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class LoginSuccess extends Component {

    render() {
        return (
            <div>
            <h1>Login Successful!</h1>
            <h2 className="nav-item ml=5">
                <Link to="/" className="nav-link">
                    Go to homepage
            </Link>
            </h2> 
            <h2 className="nav-item ml=5">
                <Link to="/profile" className="nav-link">
                    My Profile
            </Link>
            </h2> 
            </div>
         );
    }
}

export default LoginSuccess;