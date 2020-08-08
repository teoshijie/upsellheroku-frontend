const BACKEND_URL_USERS = process.env.REACT_APP_BACKEND_URL_USERS || 'http://localhost:3002/users';

export default {
    getAllbyUserID: (userID) => {

    },
    submitOrder: (info) => {
        return fetch(`${BACKEND_URL_USERS}/order`, {
            credentials: 'include',
            method: "post",
            body: JSON.stringify(info),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.json())
            .then(data => data);
    }
}