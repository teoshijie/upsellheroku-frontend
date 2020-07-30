import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ListingConsumer} from '../context';



class Product extends Component {
    
    render() { 
        const {image, name, price, condition} = this.props.listing;

        return (
            
            <div className="card" style={{width:"15rem", marginBottom:"15px"}}>
                <ListingConsumer>
                
                <img src={image} alt='listing' className="card-img-top ml-3" style={{width:"200px", height:"200px"}} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">${price}</p>
                    <p className="card-text">{condition}</p>
                </div>
    
                </ListingConsumer>
            </div>
        
        );
    }
}
 
export default Product;


