import React, { useState, useRef, useEffect } from 'react';

import AuthService from '../../Services/AuthServices';
import Message from '../authentication/message';

const Signup = props => {
    const [user, setUser] = useState({ username: "", password: ""});
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
        setUser({ username: "", password: ""});
    }

    // const onSubmit = e => {
    //     e.preventDefault();
    //     AuthService.register(user).then(data => {
    //         const { message } = data;
    //         console.log(data)
    //         setMessage(message);
    //         console.log('data is' + message)
    //         resetForm();
    //         if (err) {
    //             setMessage(message);
    //             console.log(message)
    //         } else
    //         props.history.push('/signupsucess');

    //     }).catch((err) => {
    //         setMessage(err.message)
    //         console.log('error message'+ message)
    //     })
    // }
    
    const onSubmit = e =>{
        e.preventDefault();
        AuthService.register(user).then(data=>{
            const { message } = data;
            setMessage(message);
            resetForm();
            if(!message.msgError){
                timerID = setTimeout(()=>{
                    props.history.push('/login');
                },2000)
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
                            minLength= '5'
                            maxLength= '10' 
                            onChange={onChange}
                            className="form-control"
                            placeholder="Enter Username" required />
                        <label htmlFor="password" className="sr-only">Password: </label>
                        <input type="password"
                            name="password"
                            minLength= '8'
                            pattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title = "Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                            onChange={onChange}
                            className="form-control"
                            placeholder="Enter Password" />
                        <label htmlFor="email" className="sr-only">Email: </label>
                        <input type="text"
                            name="email"
                            title = "must be in the following order: characters@characters.domain "
                            onChange={onChange}
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            className="form-control"
                            placeholder="Email" required />
                        <label htmlFor="mobile" className="sr-only">Mobile Number: </label>
                        <input type="text"
                            name="mobile"
                            onChange={onChange}
                            className="form-control"    
                            pattern="[89][0-9]{8}"
                            title = "Only accept Singapore mobile number starting with 9 or 8 and must have 9 digits"
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