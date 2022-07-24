import { Component } from "react";
import * as React from 'react';
import UserProfCard from "./UserProfCard";
import HouseFinance from "./HouseFinance"
import HomePage from "./HomePage";
import Boarder from "./Boarder";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="header">
          <UserProfCard />
        </div>
        <div id="content" class="center">
        <Paper>
          <Box sx={{ width: '500px' , height: '500px', padding: '20px'}}>
            <Router>
              <Switch>
                <Route exact path="/"><p>This is the test page</p></Route>
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
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);