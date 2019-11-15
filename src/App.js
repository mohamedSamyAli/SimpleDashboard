import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LoginComponent from "./Component/LoginComponent/LoginComponent"
import PrivateRoute from "./Component/PrivateRoute/Privatroute"
import Dashboard from "./Component/Dashboard/Dashboard"
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";
import ContextProvider from './ContextProvider'
import './App.css';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ContextProvider>

      <Grid justify="center" height="100%">
        <Router>

          <div className="App">
            <Switch>
              <Route exact path='/'>
                <Redirect
                  to={{
                    pathname: "/dashboard",
                  }}
                />
              </Route>
              <Route path="/login">
                <LoginComponent />
              </Route>
              <PrivateRoute path="/dashboard">
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
              </PrivateRoute>
            </Switch>
          </div>
        </Router>

      </Grid>
    </ContextProvider>
  );
}

export default App;
