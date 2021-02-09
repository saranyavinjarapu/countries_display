import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="fluid-container header">
        <section className="jumbotron bg-success text-white text-center">
          <div className="mastHead container">
            <div className=" row">
              <div className="col-sm-10 d-none d-sm-block">
                <h1 className="jumbotron-heading">
                  WORLD COUNTRIES INFORMATION
                </h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}

export default Header;
