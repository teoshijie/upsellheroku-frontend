import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const BACKEND_URL_LISTINGS = process.env.REACT_APP_BACKEND_URL_LISTINGS || 'http://localhost:3002/listings';

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemID: this.props.match.params.itemID,
            listings: null
        };
    }

    componentDidMount() {
        fetch(BACKEND_URL_LISTINGS + '/' + this.state.itemID)
            .then(response => response.json())
            .then(results => {
                this.setState({
                    listings: results
                })
            })
    }

    render() {
        return (
            this.state.listings &&
            <div className="container" style={{margin:"0 auto"}}>
                <div className="row" style={{ marginTop: "50px", display: "flex", justifyContent: "space-between" }}>
                    <div className="col-xs-4 item-photo" style={{ maxWidth: "40%" }}>
                        <img style={{ width: "100%" }} src={this.state.listings.image_url} />
                    </div>

                    <div className="col-xs-5" style={{ border: "0px solid gray", maxWidth: "25%" }}>
                        <h3>{this.state.listings.name}</h3>
                        
                        <p>Posted by: <Link to="">{this.state.listings.username}</Link></p>

                        <h5 style={{ color: "#337ab7" }}>Category: {this.state.listings.category}</h5>

                        <h5 style={{ color: "#337ab7" }}>Description:</h5>

                        <div className="attr" style={{ textAlign: "justify" }}>{this.state.listings.description}</div>

                    </div>

                    <div className="col-xs-9" style={{ maxWidth: "25%" }}>
                    <h6 className="title-price"><small>Price</small></h6>
                        <h3 style={{ marginTop: "0px" }}>S$ {this.state.listings.price.$numberDecimal}</h3>

                        <div className="section">
                            <h6 className="title-attr" style={{ marginTop: "0px" }} ><small>Condition</small></h6>
                            <div className="attr" style={{fontWeight:"bold"}}>{this.state.listings.condition}</div>
                        </div>

                        <div className="section">
                            <h6 className="title-attr" style={{ marginTop: "0px" }} ><small>Meetup</small></h6>
                            <div className="attr" style={{fontWeight:"bold"}}>{this.state.listings.meetup}</div>
                        </div>

                        <div className="section" style={{ paddingBottom: "20px" }}>
                            <h6 className="title-attr" style={{ marginTop: "0px" }} ><small>Stock</small></h6>
                            <div className="attr" style={{fontWeight:"bold"}}>{this.state.listings.quantity}</div>
                        </div>

                        <div className="section" style={{ paddingBottom: "20px" }}>
                            <button className="btn btn-success"><span style={{ marginRight: "20px" }} className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Add to Cart</button>
                            <h6><a href="#"><span className="glyphicon glyphicon-heart-empty" style={{ cursor: "pointer" }}></span> Add to Watchlist</a></h6>
                        </div>

                        <Link to='/'>
                            <button type='button' className="btn btn-danger" style={{ marginRight: "20px" }} >Go Back</button>
                        </Link>

                        <Link to='buynow'>
                            <button type='button' className="btn btn-danger">Buy Now</button>
                        </Link>
                        
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;