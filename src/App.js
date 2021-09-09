import React from 'react';
import {BrowserRouter as Router, Switch, Route, HashRouter} from 'react-router-dom';
import LoginPage from 'src/containers/LoginPage/LoginPage';
import ConsolePage from './containers/ConsolePage';
import { LoginProvider } from './context/LoginContext';
import { ConsoleProvider } from './context/ConsoleContext';

function App() {
  return (
    <HashRouter>

        
          <Switch>
            <LoginProvider>
              <ConsoleProvider>
                <Route exact path="/" >
                  <LoginPage />
                </Route>
                <Route  path="/console" >
                  <ConsolePage/>
                </Route>                     
              </ConsoleProvider>
            </LoginProvider>
          </Switch>
        
    </HashRouter>
  );
}

export default App;
