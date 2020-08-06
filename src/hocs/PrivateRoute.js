import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated, user, userID } = useContext(AuthContext);
    
    return (
        <Route {...rest} render={props => {
            if (!isAuthenticated) {
                return <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
            } else {
                console.log(userID)
                console.log(user)
                return (
                    <Route {...rest}
                        render={(props) =>
                            <Component {...props} />}
                    />
                );
            }
        }} />
    )
}

export default PrivateRoute;
