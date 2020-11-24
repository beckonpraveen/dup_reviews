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
import Pagination from '@material-ui/lab/Pagination';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            users: [],
            page:1,
            totalPages:0
        };
        this.handleChange = function(e,v){
            this.fetchUsers(v);
        }
    }
    render() {
        return (
            <div>
            <AppBar position="static">
                Users with more than one pending review for the same employer, since 2020
                <br/> Click on a user to view reviews
            </AppBar>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>UserId</TableCell>
                    {/* <TableCell align="left">Number of reviews</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.users.map((row) => (
                    <TableRow component={Link} href={`/reviews/${row.userId}`} key={row.userId}>
                      <TableCell component="th" scope="row">
                        {row.userId}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Pagination count={this.state.totalPages} page={this.state.page} boundaryCount={4} variant="outlined" shape="rounded" onChange={this.handleChange.bind(this)}/>
            </div>
          );
      }
    componentDidMount() {
        console.log("Component did mount");
        this.fetchUsers();
    }

    fetchUsers(page) {

        if(!page){
            if(!window.sessionStorage.getItem("pageInSession")){
                page = 1;
            }
            else{
                page = window.sessionStorage.getItem("pageInSession");
            }
        }
        window.sessionStorage.setItem("pageInSession", page);
        this.state.isFetching = true;
        this.state.page = page;
        fetch(`/api/users?page=${page}&numPerPage=50`)
        .then(res => res.json())
        .then(responseJson => {
            this.setState({isFetching:false, users: responseJson.users, totalPages:responseJson.totalPages})
            window.history.replaceState(null, "Dedup reviews", `/users/page=${page}`);
            // this.state.isFetching = false;
            // this.state.users = responseJson.users;
        })
        console.log("Supposed to fetch users");
    }
}   

export default UsersList;