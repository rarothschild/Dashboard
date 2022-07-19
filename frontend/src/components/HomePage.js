import React, { Component } from "react";
import HouseFinance from "./HouseFinance"
import CreateUser from "./CreateUser"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"

function HomePage(){
    return (
        <Router>
            <Switch>
                <Route exact path="/"><p>This is the butt page</p></Route>
                <Route path='/HouseFinance' component={HouseFinance} />
                <Route path='/CreateUser' component={CreateUser} />
            </Switch>
        </Router>
    )
}
export default HomePage
