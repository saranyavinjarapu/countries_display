import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="fluid-container header">
        <section className="jumbotron bg-info text-white text-center">
          <h1 className="jumbotron-heading">WORLD COUNTRIES INFORMATION</h1>
          <p>
            {" "}
            Please Login or Signup Using Email to see World Countries
            Information
          </p>
        </section>
      </div>
    </header>
  );
}

export default Header;
