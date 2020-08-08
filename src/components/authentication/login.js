import React, { useState, useContext } from 'react';
import AuthService from "../../Services/AuthServices";
import Message from './message';
import { AuthContext} from '../../AuthContext';
import { Link, useHistory } from 'react-router-dom';
import loginsuccess from './loginsuccess';



const Login = props => {
   
    const [user, setUser] = useState({ username: "", password: "" });
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);
    const history = useHistory()
    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        AuthService.login(user).then(data => {
            console.log(data);
            const { isAuthenticated, user, message} = data;
            if (isAuthenticated) {
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                handleUser(user);
                history.push('/loginsuccess');
                
            }
            else
                setMessage(message);
                console.log(message)
        }).catch((err) => {
            setMessage(err.message)
            console.log('error message'+ message)
        })
    }

    const handleUser = event => {
        props.setUser(event);
    }

    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <form onSubmit={onSubmit}>
                        <h3>Please log in</h3>
                        <label htmlFor="username" className="sr-only">Username: </label>
                        <input type="text"
                            name="username"
                            onChange={onChange}
                            className="form-control"
                            placeholder="Enter Username" />
                        <label htmlFor="password" className="sr-only">Password: </label>
                        <input type="password"
                            name="password"
                            onChange={onChange}
                            className="form-control"
                            placeholder="Enter Password" />
                        <button className="btn btn-lg btn-primary btn-block"
                            type="submit">Log in </button>

                        <Link to="/signup" className="nav-link">
                            Not a User? Sign Up here
                            </Link>

                    </form>



                    {message ?                        
                    <Message message={message} /> : null
                    }

                </div>
            </div>
        </div>
    )
}

export default Login;