import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const BACKEND_URL_LISTINGS = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3002/listings';

class UserProduct extends Component {
    state = {
        listings: []
    }



    deleteListing = (id) => {
        fetch(BACKEND_URL_LISTINGS + '/' + id + '/delete',
            {
                method: 'DELETE'
            })
            .then(window.location.reload())

    }


    render() {
        const { _id, image_url, name, price, condition } = this.props.listing[0];
        return (
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card" style={{ width: "15rem", marginBottom: "15px" }}>
                    <div
                        className='img-container p-5 view overlay zoom'
                        onClick={() => console.log('you clicked me on the image container')}>
                        <Link to={`${_id}/details`}>
                            <img src={image_url} alt='' className="card-img-top" />
                        </Link>
                    </div>
                    <div className="card-body mx-auto">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">${price.$numberDecimal}</p>
                        <p className="card-text">{condition}</p>
                        <Link to={`/${_id}/editlisting`}>
                            <button type='button' className="btn btn-danger">Edit</button>
                        </Link>
                        <span style={{ marginLeft: '10px' }}>
                            <button onClick={() => this.deleteListing(_id)} type='button' className="btn btn-danger">Delete</button>
                        </span>



                    </div>
                </div>
            </div>
        );
    }
}

export default UserProduct;


