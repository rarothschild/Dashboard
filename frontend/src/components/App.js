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

function LoginForm() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

function App(props) {

  const [user, setUser] = useState([])
  const [csrftoken, setCsrftoken] = useState([]);

  const setCSRF = () => {
    const { data } = axios.get('api/set-csrf/').then(res => console.log(res))
    setCsrftoken(data);
  };

  //useEffect(() => {
  //  fetch('http://127.0.0.1:8000/rest-auth/user/')
  //    .then(res => {
  //      return res.json();
  //    })
  //    .then(data => {
  //      setUser(data)
  //    })
  //}, []);

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const LoginForm = (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className>
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );

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
              <Route exact path="/">
                <button onClick={setCSRF}>Set CSRF Token</button>
                LoginForm()
                </Route>
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