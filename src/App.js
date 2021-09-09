import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginPage from 'src/containers/LoginPage/LoginPage';
import ConsolePage from './containers/ConsolePage';
import { LoginProvider } from './context/LoginContext';
import { ConsoleProvider } from './context/ConsoleContext';
import Test from './components/console/RequestList/RequestList';


function App() {
  return (
    <Router>

        
          <Switch>
            <LoginProvider>
              <ConsoleProvider>
                <Route exact path="/" >
                  <LoginPage />
                </Route>
                <Route  path="/console" >
                  <ConsolePage/>
                </Route> 
                <Route  path="/console1" >
                  <Test/>
                </Route>                      
              </ConsoleProvider>
            </LoginProvider>
          </Switch>
        
    </Router>
  );
}

export default App;
