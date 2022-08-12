import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import axios from './components/axiosConfig';
import UserProfCard from "./components/UserProfCard";
import HouseFinance from "./components/HouseFinance";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { Provider } from 'react-redux';
import store from './store';

function App(props) {
  return (
    <Provider store={store}>
      <div id="app" className="center">
        <div id="header">
          <UserProfCard user={user}/>
        </div>
        <div id="content">
          <Paper>
            <Box sx={{ width: '500px' , height: '500px', padding: '20px'}}>
              <Router>
                <Switch>
                  <Route exact path="/"><p>This is the home page</p></Route>
                  <Route path='/HouseFinance'><HouseFinance /></Route>
                  <Route path='/CreateUser'><p>This is the user page</p></Route>
                </Switch>
              </Router>
            </Box>
          </Paper>
        </div>
      </div>
    </Provider>
  );
}

export default App;