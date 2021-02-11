import React, { useState } from "react";
import "./Forms.css";
import { Link } from "react-router-dom";

/* eslint-disable */
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

function SignupForm() {
  const [firstNameErrors, setFirstNameErrors] = useState([]);
  const [lastNameErrors, setLastNameErrors] = useState([]);
  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.currentTarget;

    let fname_err, lname_err, email_err, password_err;

    switch (name) {
      case "first_name":
        fname_err =
          value.length < 5 ? "First Name must be 5 characters long!" : "";
        break;
      case "last_name":
        lname_err =
          value.length < 5 ? "Last Name must be 5 characters long!" : "";
        break;
      case "email":
        email_err =
          validEmailRegex.test(value) && value.length > 0
            ? ""
            : "Email is not valid!";
        break;
      case "password":
        password_err =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }

    setFirstNameErrors(fname_err);
    setLastNameErrors(lname_err);
    setEmailErrors(email_err);
    setPasswordErrors(password_err);
  };

  return (
    <form className="signup_form">
      <h3>Signup Using Email</h3>

      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          name="first_name"
          className="form-control"
          placeholder="First name"
          onChange={handleChange}
        />
        <span className="error">{firstNameErrors}</span>
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          name="last_name"
          className="form-control"
          placeholder="Last name"
          onChange={handleChange}
        />
        <span className="error">{lastNameErrors}</span>
      </div>

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
        />
        <span className="error">{passwordErrors}</span>
      </div>

      <Link to="/countries">
        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={
            firstNameErrors || lastNameErrors || emailErrors || passwordErrors
          }
        >
          Submit
        </button>
      </Link>

      <p className="forgot-password text-right">
        Already registered <a href="#">login?</a>
      </p>
    </form>
  );
}

export default SignupForm;
