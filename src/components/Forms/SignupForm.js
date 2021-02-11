import React from "react";
import "./Forms.css";
import { Link } from "react-router-dom";

function SignupForm() {
  return (
    <form className="signup_form">
      <h3>Signup Using Email</h3>

      <div className="form-group">
        <label>First name</label>
        <input type="text" className="form-control" placeholder="First name" />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input type="text" className="form-control" placeholder="Last name" />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <Link to="/countries">
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </Link>

      <p className="forgot-password text-right">
        Already registered <a href="#">sign in?</a>
      </p>
    </form>
  );
}

export default SignupForm;
