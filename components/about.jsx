// const { render } = require("react-dom");
import React, { Component } from "react";


class About extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <hi>Hi! I'm Alissa! </hi>
                <h4>This is where my about me will be</h4>
            <Router>
                <Switch>
                    <Route exact path='/about'></Route>
                </Switch>
            </Router>
            </div>
        );
    };
    
    };
   