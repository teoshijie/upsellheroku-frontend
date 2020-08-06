import React, {createContext,useState,useEffect} from 'react';
import AuthService from './Services/AuthServices';

export const AuthContext = createContext();

export default ({ children })=>{
    const [user,setUser] = useState(null);
    const [userID,setUserID] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded,setIsLoaded] = useState(false);
    

    useEffect(()=>{
        AuthService.isAuthenticated().then(data =>{
            setUserID(data._id);
            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
            
            console.log(data);
            
        });
    },[]);

    return (
        <div>
            {!isLoaded ? <h1>Loading</h1> : 
            <AuthContext.Provider value={{user,setUser,isAuthenticated,setIsAuthenticated,userID, setUserID}}>
                { children }
            </AuthContext.Provider>}
        </div>
    )
}