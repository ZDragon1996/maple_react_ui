import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", confirmed_password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required()
      .label("Username"),
    password: Joi.string().min(8).required().label("Password"),
    confirmed_password: Joi.valid(Joi.ref("password"))
      .required()
      .options({
        language: { any: { allowOnly: "does not match with Password" } },
      }),
  };

  doSubmit = () => {
    // call the server
    console.log("username: ", this.state.data.username);
    console.log("password: ", this.state.data.password);
    console.log("Confirm password: ", this.state.data.confirmed_password);
  };
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-5">
          <div className="login-wrap p-4 p-md-5">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="fa fa-user-o"></span>
            </div>
            <h3 className="text-center mb-4">Register</h3>
            <form onSubmit={this.handleSubmit} className="login-form">
              {this.renderInput("username", "text")}
              {this.renderInput("password", "password")}
              {this.renderInput("confirmed_password", "password")}

              <div className="form-group">{this.renderButton("Register")}</div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
