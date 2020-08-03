import React, { useState, useRef, useEffect } from 'react';

import AuthService from '../../Services/AuthServices';
import Message from '../authentication/message';

const Signup = props => {
    const [user, setUser] = useState({ username: "", password: "", role: "" });
    const [message, setMessage] = useState(null);
    let timerID = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        }
    }, []);

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const resetForm = () => {
        setUser({ username: "", password: "", role: "" });
    }

    const onSubmit = e => {
        e.preventDefault();
        AuthService.register(user).then(data => {
            const { message } = data;
            console.log('data is' + data)
            setMessage(message);
            resetForm();
            if (!message.msgError) {
                timerID = setTimeout(() => {
                    props.history.push('/signupsucess');
                }, 2000)
            }
        });
    }



    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <form onSubmit={onSubmit}>
                        <h3>Sign Up</h3>
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
                        <label htmlFor="email" className="sr-only">Email: </label>
                        <input type="text"
                            name="email"
                            onChange={onChange}
                            className="form-control"
                            placeholder="Email" />
                        <label htmlFor="mobile" className="sr-only">Mobile Number: </label>
                        <input type="number"
                            name="mobile"
                            onChange={onChange}
                            className="form-control"
                            placeholder="Mobile Number" />
                        <button className="btn btn-lg btn-primary btn-block"
                            type="submit">Sign Up</button>
                    </form>
                    {message ? <Message message={message} /> : null}
                </div>
            </div>
        </div>
    )
}

export default Signup;