const BACKEND_URL_LISTINGS = process.env.REACT_APP_BACKEND_URL_LISTINGS || 'http://localhost:3002/listings';
const BACKEND_URL_USERS = process.env.REACT_APP_BACKEND_URL_USERS || 'http://localhost:3002/users';

export default {
    findAll: () => {
        return fetch(BACKEND_URL_LISTINGS)
            .then(res => res.json())
            .then(data => data)
    },
    findByID: (listingID) => {
        return fetch(BACKEND_URL_LISTINGS + '/' + listingID)
            .then(res => res.json())
            .then(data => data);
    },
    create: (item) => {
        return fetch(BACKEND_URL_USERS + '/create', {
            body: JSON.stringify(item),
            credentials: 'include',
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => data)
    },
    editByID: (itemID, data) => {
        return fetch(BACKEND_URL_LISTINGS + '/' + itemID + '/update', {
            body: JSON.stringify(data),
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => data)
    },
    deleteByID: (id) => {
        return fetch(BACKEND_URL_LISTINGS + '/' + id + '/delete', {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => data)
    },
    findByUserID: (userID) => {
        return fetch(BACKEND_URL_LISTINGS + '/myListings' + '/' + userID)
            .then(res => res.json())
            .then(data => data)
    }
}