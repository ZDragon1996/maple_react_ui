import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required()
      .label("Username"),
    password: Joi.string().min(8).required().label("Password"),
  };

  doSubmit = () => {
    // call the server
    console.log("username: ", this.state.data.username);
    console.log("password: ", this.state.data.password);
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-5">
          <div className="login-wrap p-4 p-md-5">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="fa fa-user-o"></span>
            </div>
            <h3 className="text-center mb-4">Sign In</h3>
            <form onSubmit={this.handleSubmit} className="login-form">
              {this.renderInput("username", "text")}
              {this.renderInput("password", "password")}

              <div className="form-group">{this.renderButton("Login")}</div>
              <div className="form-group d-md-flex">
                <div className="w-50">
                  <label className="checkbox-wrap checkbox-primary">
                    Remember Me
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="w-50 text-md-right">
                  <a href="#">Forgot Password</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
