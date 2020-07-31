import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ListingConsumer} from '../context';



class Product extends Component {
    
    render() { 
          const {image_url, name, price, condition} = this.props.listing[0];
        return (
            
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className='className="card'>
                     <div 
                        className='img-container p-5' 
                        onClick={() => console.log('you clicked me on the image container')}>
                        <Link to="/details">
                            <img src={image_url} alt='' className="card-img-top"/>
                        </Link>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">${price.$numberDecimal}</p>
                        <p className="card-text">{condition}</p>
                    </div>
                </div>

            </div>
            



        
        );
    }
}
 
export default Product;



// <div className="card" style={{width:"15rem", marginBottom:"15px"}}>
                
                
// <img src={image} alt='listing' className="card-img-top ml-3" style={{width:"200px", height:"200px"}} />
// <div className="card-body">
//     <h5 className="card-title">{name}</h5>
//     <p className="card-text">${price}</p>
//     <p className="card-text">{condition}</p>
// </div>


// </div>