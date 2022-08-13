import React, { Component } from "react";
import HouseFinance from "./HouseFinance"
import CreateUser from "./CreateUser"
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function HomePage(){
    return (
        <button onClick={setCSRF}>Set CSRF Token</button>
    )
}
export default HomePage
