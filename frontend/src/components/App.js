import * as React from 'react';
import { useState, useEffect } from 'react';
import UserProfCard from "./UserProfCard";
import HouseFinance from "./HouseFinance";
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

  useEffect(() => {
    fetch('http://127.0.0.1:8000/rest-auth/user/')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setUser(data)
      })
  }, []);

  return (
    <div>
      <div id="header">
        <UserProfCard user={user}/>
      </div>
      <div id="content" className="center">
      <Paper>
        <Box sx={{ width: '500px' , height: '500px', padding: '20px'}}>
          <Router>
            <Switch>
              <Route exact path="/"><p>Welcome to the home page.</p></Route>
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

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);