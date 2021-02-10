import React, { useEffect, useState, useReducer } from "react";
import CountryCard from "../CountryCard/CountryCard";

function Countries() {
  const [allCountriesData, setAllCountriesData] = useState([]);

  const getAllCountriesData = async () => {
    try {
      const res = await fetch(
        "https://restcountries.eu/rest/v2/all"
      ).then((response) => response.json());
      setAllCountriesData(res);
    } catch (e) {
      console.log("Failed to fetch data from the server.");
    }
  };

  useEffect(() => {
    getAllCountriesData();
  }, []);

  return <CountryCard countries={allCountriesData} />;
}

export default Countries;
