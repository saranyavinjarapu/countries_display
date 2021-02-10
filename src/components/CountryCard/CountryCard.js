import React from "react";
import "./CountryCard.css";

function CountryCard({ countries }) {
  return (
    <section className="l-grid-4 cards-container">
      <div className="row">
        {countries.map((country) => {
          return (
            <div className="col-md-3" key={country.alpha2Code}>
              <div className="card">
                <h5 className="card-header text-white bg-dark text-center">
                  {country.name}
                </h5>
                <div className="card-body row">
                  <div className="col-md-6 text-center">
                    <img className="country_image" src={country.flag} />
                  </div>
                  <div className="col-md-6 desc">
                    <p>
                      <b>Capital: </b> {country.capital}
                    </p>
                    <p>
                      <b>Region:</b> {country.region}
                    </p>
                    <p>
                      <b>Population: </b> {country.population}
                    </p>
                    <p>
                      <b>Area: </b> {country.area}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CountryCard;
