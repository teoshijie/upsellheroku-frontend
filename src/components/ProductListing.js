import React, { Component } from 'react';
import Product from './Product';
import {ListingConsumer} from '../context';


class ProductListing extends Component {
      state = {
          listings: []
      };

    render() { 
        return ( 
            <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <h1> Product Listings</h1>
                    <div className="row">
                        <ListingConsumer>
                            {value => {
                                return value.listings.map(listing => {
                                    return <Product 
                                    key={listing._id} 
                                    listing= {[listing]}
                                   
         
                                    />
                                })

                            }}
                            
                        </ListingConsumer>

                        
                        
                    </div>
                
                </div>
            </div>
        
            </React.Fragment>
            
            
         );
    }
}
 
export default ProductListing;
