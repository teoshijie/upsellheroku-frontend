import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import { Link } from 'react-router-dom';
import ListingService from "../Services/ListingServices";
import OrderService from "../Services/OrderServices";

const BuyNow = props => {
    const { isAuthenticated, user } = useContext(AuthContext);
    const targetID = props.match.params.itemID;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState(null);
    let [quantity, setQuantity] = useState(1);

    useEffect(() => {
        ListingService.findByID(targetID)
            .then(data => {
                if (!data.message) {
                    setItems(data);
                    setIsLoaded(true);
                } else {
                    setError(data.message.msgError)
                    setIsLoaded(true);
                }
            })
    }, [])

    const handleChange = (event) => {
        if (event.target.id === "minus" && quantity > 1) {
            quantity -= 1;
            setQuantity(quantity);
        } else if (event.target.id === "plus" && quantity < items.quantity) {
            quantity += 1;
            setQuantity(quantity);
        }
    }

    const processOrder = (event) => {
        event.preventDefault()
        let sum = parseFloat(quantity * items.price.$numberDecimal).toFixed(2);
        if (items.userID === user._id){
            window.alert("Error: You cannot buy your own item");
        } else if (parseFloat(user.wallet.$numberDecimal) < sum ) {
            console.log(sum);
            console.log(user.wallet.$numberDecimal)
            console.log(user.wallet.$numberDecimal < sum)
            window.alert("Error: You have insufficient balance in your wallet");
        } else {
        const getTicketObject = (items) => {
            const {
                name,
                category,
                description,
                meetup,
                condition
            } = items;
            const newObject = {
                name,
                category,
                description,
                meetup,
                condition
            };
            return newObject;
        }
        let orderTicket = getTicketObject(items);
        orderTicket.seller_userID = items.userID;
        orderTicket.quantity = quantity;
        orderTicket.amount = sum;
        OrderService.submitOrder(orderTicket)
            .then(data => data)
            .then(()=>{
                window.alert("transaction submitted");
                props.history.push('/');
                window.location.reload();
            })
        }
    }

    const authenticatedRender = () => {
        return (
            (isLoaded) &&
            <div className="py-5">
                <div className="container">
                    <form onSubmit={processOrder}>
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
                                    <h3 style={{ color: "#337ab7" }}>Quantity</h3>
                                    <div className="input-group col-md-3">
                                        <span className="input-group-btn">
                                            <button type="button" className="btn btn-light" id="minus" onClick={(event) => handleChange(event)}>
                                                -
                                        </button>
                                        </span>
                                        <input type="text" name="quantity" className="form-control input-number" value={quantity} min="1" max={items.quantity}></input>
                                        <span className="input-group-btn">
                                            <button type="button" className="btn btn-light" id="plus" onClick={(event) => handleChange(event)}>
                                                +
                                        </button>
                                        </span>
                                    </div>
                                    <hr></hr>
                                    <h3 style={{ color: "#337ab7" }}>Payment Method</h3>
                                    <div className="form-group col-md-4">
                                    <h4 style={{ fontWeight: "bold" }}>e-Wallet</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="card" style={{ width: "30%" }}>
                                <div style={{ margin: "25px" }}>
                                    <div>
                                        <h3>Payment Summary</h3>
                                        <div style={{ display: "flex", marginTop: "20px" }}>
                                            <div className="col-xs-4 item-photo" style={{ width: "40%" }}>
                                                <img style={{ width: "100%" }} src={items.image_url} />
                                            </div>
                                            <div className="col-xs-4" style={{ marginLeft: "20px" }}>
                                                <h5 style={{ color: "#337ab7" }}>{items.name}</h5>
                                                <h5 style={{ fontWeight: "bold" }}>S$ {items.price.$numberDecimal}</h5>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: "20px" }} >
                                            <div className="col-xs-4" >
                                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <h5 style={{ textAlign: "left" }}>Subtotal:</h5>
                                                    <h5 style={{ textAlign: "right" }}>{quantity} x S$ {items.price.$numberDecimal}</h5>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <h5 style={{ textAlign: "left" }}>Discount:</h5>
                                                    <h5 style={{ textAlign: "right" }}>S$ 0.00</h5>
                                                </div>
                                            </div>
                                            <hr></hr>
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <h5 style={{ textAlign: "left" }}>Total:</h5>
                                                <h5 style={{ textAlign: "right" }}>S$ {parseFloat(quantity * items.price.$numberDecimal).toFixed(2)}</h5>
                                            </div>
                                            <hr></hr>
                                        </div>
                                        <div>
                                            <button type='submit' className="btn btn-danger">Confirm and Proceed</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    const unauthenticatedRender = () => {
        return (
            <div className="py-5">
                <div className="container">
                    Please log in <Link to='/login'>
                        here
                    </Link> or sign up <Link to='/signup'>
                        here
                    </Link> to continue
                </div>
            </div>
        )
    }

    return (
        <>
            {!isAuthenticated ? unauthenticatedRender() : authenticatedRender()}
        </>
    );
}

export default BuyNow;