const BACKEND_URL_LISTINGS = process.env.REACT_APP_BACKEND_URL_LISTINGS || 'http://localhost:3002/listings';
const BACKEND_URL_USERS = process.env.REACT_APP_BACKEND_URL_USERS || 'http://localhost:3002/users';

export default {
    findAll: () => {
        return fetch(BACKEND_URL_LISTINGS)
            .then(response => response.json())
            .then(data => data)
    },
    findByID: (listingID) => {
        return fetch(BACKEND_URL_LISTINGS + '/' + listingID)
            .then(response => response.json())
            .then(data => data);
    },
    create: () => {
        console.log("create");
    },
    editByID: (itemID, data) => {
        return fetch(BACKEND_URL_LISTINGS + '/' + itemID + '/update', {
            body: JSON.stringify(data),
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => data);
    },
    deleteByID: () => {
        console.log("delete")
    }
}