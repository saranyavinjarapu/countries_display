import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Forms.css";

/* eslint-disable */
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

function LoginForm() {
  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.currentTarget;

    let email_error_message, password_error_message;

    switch (name) {
      case "email":
        email_error_message =
          validEmailRegex.test(value) && value.length > 0
            ? ""
            : "Email is not valid!";
        break;
      case "password":
        password_error_message =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }

    setEmailErrors(email_error_message);
    setPasswordErrors(password_error_message);
  };

  return (
    <form className="login_form">
      <h3>Login Using email</h3>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
          onChange={handleChange}
        />

        <span className="error">{emailErrors}</span>
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter password"
          onChange={handleChange}
          noValidate
        />
        <span className="error">{passwordErrors}</span>
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="custom_check"
          />
          <label className="custom-control-label" htmlFor="custom_check">
            Remember me
          </label>
        </div>
      </div>
      <Link to="/countries">
        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={emailErrors || passwordErrors}
        >
          {" "}
          Submit
        </button>
      </Link>

      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
}

export default LoginForm;
