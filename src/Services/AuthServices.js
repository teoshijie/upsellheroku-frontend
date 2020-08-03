const BACKEND_URL_USERS = process.env.REACT_APP_BACKEND_URL_USERS || 'http://localhost:3002/users';

export default {
    login : user =>{
        return fetch(`${BACKEND_URL_USERS}/login`,{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => {
            if(res.status !== 401)
                return res.json().then(data => data);
            else
                return { isAuthenticated : false, user : {username : ""}};
        })
    },
    register : user =>{
        console.log(user);
        return fetch(`${BACKEND_URL_USERS}/signup`,{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.json())
          .then(data => data);
    },
    logout : ()=>{
        return fetch(`${BACKEND_URL_USERS}/logout`)
                .then(res => res.json())
                .then(data => data);
    },
    isAuthenticated : ()=>{
        return fetch(`${BACKEND_URL_USERS}/authenticated`)
                .then(res=>{
                    if(res.status !== 401)
                        return res.json().then(data => data);
                    else
                        return { isAuthenticated : false, user : {username : ""}};
                });
    }

}