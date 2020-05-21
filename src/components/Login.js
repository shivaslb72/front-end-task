import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { checkUser } from "../actions/login";

export class Login extends Component {
      state = {
            username: "",
            password: ""
      };

      static propTypes = {
            checkUser: PropTypes.func.isRequired,
            isAuthenticated: PropTypes.bool
      };

      onSubmit = e => {
            e.preventDefault();

            this.props.checkUser(this.state.username, this.state.password);
      };

      onChange = e => this.setState({ [e.target.name]: e.target.value });

      render() {
            if (this.props.isAuthenticated) {
                  return <Redirect to="/dashboard" />;
            }
            const { username, password } = this.state;
            return (
                  <div className="col-md-6 m-auto">
                        <br />
                        <h2 className="text-center">Login Page</h2>
                        <div className="card card-body mt-5">
                              <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                          <label>Username</label>
                                          <input
                                                type="text"
                                                name="username"
                                                className="form-control"
                                                onChange={this.onChange}
                                                value={username}
                                                required
                                          />
                                    </div>

                                    <div className="form-group">
                                          <label>Password</label>
                                          <input
                                                type="password"
                                                name="password"
                                                className="form-control"
                                                onChange={this.onChange}
                                                value={password}
                                                required
                                          />
                                    </div>

                                    <div className="form-group">
                                          <button type="submit" className="btn btn-primary">
                                                Login
              </button>
                                    </div>
                              </form>
                        </div>
                  </div>
            );
      }
}
const mapStateToProps = state => ({
      isAuthenticated: state.login.isAuthenticated
});
export default connect(mapStateToProps, { checkUser })(Login);
