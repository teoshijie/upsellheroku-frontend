import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserProduct from './UserProduct';


const BACKEND_URL_USERS = process.env.REACT_APP_BACKEND_URL_USERS || 'http://localhost:3002/users';
const BACKEND_URL_LISTINGS = process.env.REACT_APP_BACKEND_URL_LISTINGS || 'http://localhost:3002/listings';

class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userID: this.props.match.params.userID,
            users: [],
            listings: []
        };
    }

    componentDidMount() {
        fetch(BACKEND_URL_USERS + '/' + this.state.userID)
            .then(response => response.json())
            .then(results => {
                // console.log(results)
                this.setState({
                    users : results
                }, () => {
                    this.getListingsByID();
                });
            })
    }

    getListingsByID = () => {
        fetch(BACKEND_URL_LISTINGS + '/myListings' + '/' + this.state.userID)
            .then(response => response.json())
            .then(results => {
                console.log(results)
                this.setState({
                    listings: results
                })
            })
    }

render() {  
        return ( 
            
        this.state.users &&   
        <div className="container-fluid py-5 ">
            <div className="row">
                <div className="col-3">
                    <div className="container justify-content-center">
                        <div style={{marginLeft:'80px', marginTop:'75px'}}>
                            <img style={{width:"150px", height:"150px", borderRadius:"80px"}}
                            src="https://i.ibb.co/djkcPvD/blank-profile-picture-973460-640.png"/>
                        </div>
                    
                        <div style={{marginLeft:'85px', marginTop:'20px'}}>
                            <h4>{this.state.users.username}</h4>
                            <h5>email: {this.state.users.email}</h5>
                            <h5>mobile: {this.state.users.mobile}</h5>
                        </div>

                    </div>

                </div>

                <div className="col-9">
                    <div className="container">
                        <h1> My Listings</h1>
                        <div className="row"> 
                            {this.state.listings.map(listing => 
                                <UserProduct 
                                    key={listing._id}
                                    listing={[listing]}   
                                />
                            )}
                        </div>
                    </div>


                </div>
                
               
            </div>
    
        </div>
            


            
         );
    }
}
 
export default UserProfile;

