import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import UserProfCard from "./containers/UserProfCard";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { Provider } from 'react-redux';
import store from './store';

import checkAuthenticated from './actions/auth';

import Layout from './hocs/Layout'
import Dashboard from './components/Dashboard'

function App(props) {

  return (
    <Provider store={store}>
       <Router>
          <Layout>
              <Routes>
                <Route exact path='/' element={<Dashboard />} />
              </Routes>
          </Layout>
        </Router>
    </Provider>
  );
}

export default App;