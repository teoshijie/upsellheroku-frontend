import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../favicon.png';


class Navbar extends Component {
    
    render() { 
        return ( 
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="store" 
                    className='navbar-brand'/>   
                </Link>
                <ul className='navbar-nav align-item-center'>      
                       <li className="nav-item ml=5"> 
                            <Link to="/" className="nav-link">
                            PRODUCTS
                            </Link>
                       </li> 
                </ul>

                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text" id="btnGroupAddon">@</div>
                    </div>

                    <input type="text" className="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon"/>  
                </div>
            

                <ul className='navbar-nav align-item-center'>
                       <li className="nav-item ml-5"> 
                            <Link to="/signup" className="nav-link">
                             Sign Up
                            </Link>
                       </li>  
                
                       <li className="nav-item ml-5"> 
                            <Link to="/login" className="nav-link">
                            Log In
                            </Link>
                       </li>                    
                </ul>

                <Link to='/sell' className="ml-5">
                    <button type='button' className="btn btn-danger">SELL</button>
                </Link>

            </nav>

         );
    }
}
 
export default Navbar;
