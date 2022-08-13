import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
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
          <UserProfCard />
        </div>
        <div id="content">
          <Paper>
            <Box sx={{ width: '500px' , height: '500px', padding: '20px'}}>
              <Router>
                <Routes>
                  <Route exact path="/"><p>This is the home page</p></Route>
                  <Route path='/HouseFinance'><HouseFinance /></Route>
                  <Route path='/CreateUser'><p>This is the user page</p></Route>
                </Routes>
              </Router>
            </Box>
          </Paper>
        </div>
      </div>
    </Provider>
  );
}

export default App;