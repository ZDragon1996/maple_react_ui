import React, { Component, useEffect } from "react";
import Joi from "joi-browser";
import Input from "../common/input";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    console.log("validate errors", errors);
    return errors;
  };

  validateConfirmPassworld = (input) => {
    if (this.state.data.password === input.value) {
      console.log("input", input.value);
      console.log("this.state.data.password", this.state.data.password);
      this.setState({ errors: {} });
    }
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    console.log("schema", schema);
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
    this.validateConfirmPassworld(input);
  };

  renderButton(label) {
    return (
      <button
        type="submit"
        className="form-control btn btn-primary rounded submit px-3"
        disabled={this.validate()}
      >
        {label}
      </button>
    );
  }

  renderInput = (name, type) => {
    const { data, errors } = this.state;
    return (
      <React.Fragment>
        <Input
          value={data[name]}
          autoFocus
          onChange={this.handleChange}
          id={name}
          type={type}
          name={name}
          className="form-control rounded-left"
          placeholder={name}
          error={errors[name]}
        />
      </React.Fragment>
    );
  };
}

export default Form;
