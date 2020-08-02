import React, { Component } from 'react';

const ListingContext = React.createContext();
//Provider 
//Consumer 

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3002/listings';


class ListingProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
             listings: [] //set initial state
    }
}

//function to fetch data from backend server 
    componentDidMount () {
        fetch(BACKEND_URL)
            .then(response => response.json())
            .then(results => {
                //console.log(results)
                this.setState({
                    listings: results //reset the listings state to data fetched 
                    
                })
                
            })
            
       
    }


    render() { 
        return (  
            <ListingContext.Provider value={{
        ...this.state,

            }}>
            {this.props.children}
            </ListingContext.Provider>
        );
    }
}


const ListingConsumer = ListingContext.Consumer;
 
export {ListingProvider, ListingConsumer};