import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import { Link } from 'react-router-dom';
const BACKEND_URL_LISTINGS = process.env.REACT_APP_BACKEND_URL_LISTINGS || 'http://localhost:3002/listings';

const BuyNow = props => {
    const { isAuthenticated } = useContext(AuthContext);
    const targetID = props.match.params.itemID;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch(BACKEND_URL_LISTINGS + '/' + targetID)
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setItems(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    const unauthenticatedRender = () => {
        console.log(items);
        return (
            items &&
            <div className="py-5">
                <div className="container">
                    <h2>Order Summary</h2>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>

                        <div className="card" style={{ width: "60%" }}>
                            <div style={{ margin: "25px" }}>
                                <h3 style={{ color: "#337ab7" }}>Item Condition</h3>
                                <h4 style={{ fontWeight: "bold" }}>{items.condition}</h4>
                                <hr></hr>
                                <h3 style={{ color: "#337ab7" }}>Meetup</h3>
                                <h4 style={{ fontWeight: "bold" }}>{items.meetup}</h4>
                                <hr></hr>
                                <h3 style={{ color: "#337ab7" }}>Payment Method</h3>
                                <select class="form-control form-control-lg" id="payment">
                                    <option value="cash" defaultValue>Cash</option>
                                    <option value="paypal">Paypal</option>
                                    <option value="grabpay">GrabPay</option>
                                </select>
                            </div>
                        </div>

                        <div className="card" style={{ width: "30%" }}>
                            <div style={{ margin: "25px" }}>
                                <div>
                                    <h3>Payment Summary</h3>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div className="col-xs-4 item-photo" style={{ width: "40%" }}>
                                            <img style={{ width: "100%" }} src={items.image_url} />
                                        </div>
                                        <div className="">
                                            <h5 style={{}}>{items.name}</h5>
                                            <h5 style={{ fontWeight: "bold" }}>S$ {items.price.$numberDecimal}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    const authenticatedRender = () => {
        return (
            <div className="py-5">
                <div className="container">
                    Please log in <Link to='/login'>
                        here
                    </Link> or sign up <Link to='/signup'>
                        here
                    </Link> to continue
                    {items.name}
                </div>
            </div>
            // <div className="py-5">
            //     <div className="container">
            //         Buy ah!
            //     </div>
            // </div>
        )
    }



    return (
        <>
            {!isAuthenticated ? unauthenticatedRender() : authenticatedRender()}
        </>
    );

}

export default BuyNow;