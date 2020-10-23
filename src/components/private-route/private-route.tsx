import React, {useContext} from 'react';
import {Route, Redirect, RouteProps} from 'react-router';
import {UserContext} from '../../contexts/user-context';

interface PrivateRouteProps extends RouteProps {
  redirectPath: string
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  const {isAuth} = useContext(UserContext);

  return (isAuth ?
    <Route {...props} component={props.component} /> :
    <Redirect to={{pathname: props.redirectPath}} />
  )
}

export default PrivateRoute;