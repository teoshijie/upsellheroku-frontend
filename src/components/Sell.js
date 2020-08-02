import React, { Component } from 'react';


class Sell extends Component {
   
        

    render() { 
        return (  
            <React.Fragment>
            <h3>Upload Item To Sell</h3>
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">  
                    
                <form onSubmit={this.handleSubmit}> 
                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input className="form-control" type="text" value={this.image_url} id="image" onChange={this.handleChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input className="form-control" type="text" value={this.name}  id="name" onChange={this.handleChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input className="form-control" type="text" value={this.state.quantity}  id="quantity" onChange={this.handleChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input className="form-control" type="text" value={this.state.price}  id="price" onChange={this.handleChange} />
                        </div>

                    

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea type="text" className="form-control border border-success" name="description" id="description" rows="5" value={this.state.description} onChange={this.handleChange}></textarea>
                        </div>

                    <div className="form-group ">
                        <label htmlFor="meetup">Meet up</label>
                        <input className="form-control" type="text" value={this.state.meetup}  id="meetup" onChange={this.handleChange}/>
                    </div>  
                    
                    <input type="submit"/>              
                </form>
            
            </div>
            </React.Fragment>
            
    
        );
    }
}
 
export default Sell;
