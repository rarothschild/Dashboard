import * as React from 'react';
import { useState, useEffect } from 'react';
import UserProfCard from "./UserProfCard";
import HouseFinance from "./HouseFinance";
import axios from './axiosConfig';
import HomePage from "./HomePage";
import Boarder from "./Boarder";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function App(props) {

  const [user, setUser] = useState([])
  
  // Get user data
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/users/')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setUser(data)
      })
  }, []);

  return (
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
  );
}

const container = document.getElementById("main");
const root = createRoot(container);
root.render(<App />);