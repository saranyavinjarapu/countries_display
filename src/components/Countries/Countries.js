import React, { useEffect, useState } from "react";
import "./Countries.css";
import CountryCard from "../CountryCard/CountryCard";

function Countries() {
  const [allCountriesData, setAllCountriesData] = useState([]);
  const [filteredCountriesData, setFilteredCountriesData] = useState([]);
  const [filterWord, setFilterWord] = useState([]);

  const filterCountries = (event) => {
    setFilterWord(event.target.value);
    let keyFilterWord = event.target.value.toLowerCase();
    const filterCountryList = allCountriesData.filter((country) => {
      let cArr = country.name.toLowerCase();
      return cArr.indexOf(keyFilterWord) !== -1;
    });

    setFilteredCountriesData(filterCountryList);
  };

  const getAllCountriesData = async () => {
    try {
      const response = await fetch(
        "https://restcountries.eu/rest/v2/all"
      ).then((res) => res.json());
      setAllCountriesData(response);
    } catch (e) {
      console.log("Failed to fetch data from the server");
    }
  };

  function deployCountriesList() {
    const search = filterWord;
    if (search.length === 0) {
      return allCountriesData;
    } else {
      return filteredCountriesData;
    }
  }

  useEffect(() => {
    getAllCountriesData();
  }, []);

  return (
    <div>
      <div className="search text-white text-center">
        <label className="text-center col-md-5">Search by Country Name: </label>
        <input
          type="text"
          placeholder="Search"
          value={filterWord}
          onChange={filterCountries}
          className="search_box"
        />
      </div>

      <CountryCard countries={deployCountriesList()} />
    </div>
  );
}

export default Countries;
