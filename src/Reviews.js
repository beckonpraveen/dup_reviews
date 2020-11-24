import React, {Component} from 'react';
import M from 'materialize-css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';


class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            reviews: [],
            userId: window.location.pathname.match(/\d+/g)[0]
        };
    }
    render(){
        return (
            <div>
            <AppBar position="static">
                Potentially duplicate reviews
            </AppBar>
            <button onClick={() => window.history.back()}>Back</button>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ReviewId</TableCell>
                    <TableCell>EmployerId</TableCell>
                    <TableCell>UserEnteredOccupation</TableCell>
                    <TableCell>Pros</TableCell>
                    <TableCell>Cons</TableCell>
                    <TableCell>Headline</TableCell>
                    <TableCell>Advice</TableCell>
                    <TableCell>ReviewDateTime</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.reviews.map((row) => (
                    <TableRow key={row.FK_reviewId}>
                      <TableCell component="th" scope="row">
                        {row.reviewId}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.employerId}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.userEnteredOccupation}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.pros}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.cons}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.headline}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.advice}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.reviewDateTime}
                      </TableCell>
                      {/* <TableCell align="left">{row.numOfReview}</TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            </div>
          );
    }
    componentDidMount() {
        console.log("Component did mount"+"::"+JSON.stringify(this.props));
        this.fetchReviews(this.state.userId);
    }

    fetchReviews(user) {
        this.state.isFetching = true;
        fetch(`/api/reviews/${user}`)
        .then(res => res.json())
        .then(responseJson => {
            this.setState({isFetching:false, reviews: responseJson.reviews})
            // this.state.isFetching = false;
            // this.state.users = responseJson.users;
        })
        console.log("Supposed to fetch users");
    }
}   

export default Reviews;