import React, { Component } from "react";

const Input = ({ name, error, ...rest }) => {
  return (
    <div className="form-group">
      <input
        {...rest}
        name={name}
        autoFocus
        id={name}
        className="form-control rounded-left"
        placeholder={name}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
