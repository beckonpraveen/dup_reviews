import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Home extends Component {

    render() {

        return (
            <div>
            <AppBar position="static">
                About this dataset
            </AppBar>
            
            <span>This dataset includes potentially duplicate pending reviews, that are created by the same user for the same employer, since 2020</span>
            <br/>
            Navigate to <Link to="/users?page=1">Users with pending reviews</Link>

            <Container maxWidth="sm"/>
            </div>
            
        );

    }   
}

export default Home;