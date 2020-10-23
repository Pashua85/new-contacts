import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { UserContextProvider} from '../../contexts/user-context';
import {GlobalStyles} from './style';
import Contacts from '../contacts/contacts';
import Login from '../login/login';
import SignUp from '../sign-up/sign-up';
import PrivateRoute from '../private-route/private-route';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <UserContextProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Contacts} redirectPath="/login" />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
        </Switch>
      </UserContextProvider>
      
    </BrowserRouter>
  );
}

export default App;