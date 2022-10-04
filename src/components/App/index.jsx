import React from "react";
import { ApiContextProvider } from "../../context/ApiContext";
import CurrentWeather from "../CurrentWeather";
import SearchCountries from "../SearchCountries";
import ListDay from "../ListDay";
import './App.css'

function App() {

  return (
    <ApiContextProvider>
      <div className="App-container">
        <div className="App">
          <CurrentWeather />
          <SearchCountries />
        </div>
        <ListDay />
      </div>
    </ApiContextProvider>
  );
}

export default App;
