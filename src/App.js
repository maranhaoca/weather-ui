import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchBar } from './components/SearchBar.js';
import CityList from './data/city.list.json'
import citiesWithinCountry from './data/citiesWithinCountryApi';

function App() {
  console.log("livia1")
  const ptCities = citiesWithinCountry("IN")
  console.log("livia3")
  console.log(ptCities)

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <SearchBar placeholder="Search by City" data={ptCities} />
        </header>
    </div>
  );
}

export default App;
