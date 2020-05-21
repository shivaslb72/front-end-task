import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Employee from "../data/employeelist";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/login";

class Dashboard extends Component {
 static propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
 };

 render() {
  if (!this.props.isAuthenticated) {
   return <Redirect to="/" />;
  }
  return (
   <div>
    <h1 className="text-center">Dashboard Page</h1>
    <h3 className="text-center">Employee List</h3>
    <br />
    <table className="table table-striped">
     <thead>
      <tr>
       <th>ID</th>
       <th>Name</th>
       <th>Age</th>
       <th>Gender</th>
       <th>Email</th>
       <th>PhoneNo</th>
      </tr>
     </thead>
     <tbody>
      {Employee.map(x => (
       <tr key={x.id}>
        <td>{x.id}</td>
        <td>{x.name}</td>
        <td>{x.age}</td>
        <td>{x.gender}</td>
        <td>{x.email}</td>
        <td>{x.phoneNo}</td>
       </tr>
      ))}
     </tbody>
    </table>
    <br />
    <button className="btn btn-primary" onClick={this.props.logout}>
     Logout
        </button>
   </div>
  );
 }
}

const mapStateToProps = state => ({
 isAuthenticated: state.login.isAuthenticated
});
export default connect(mapStateToProps, { logout })(Dashboard);
