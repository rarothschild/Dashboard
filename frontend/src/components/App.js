import { Component } from "react";
import * as React from 'react';
import HomePage from "./HomePage";
import Boarder from "./Boarder";
import { render } from "react-dom";
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
      <div className="center">
        <div id="main-top">Top</div>
        <div id="main-bottom">Bottom</div>
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);