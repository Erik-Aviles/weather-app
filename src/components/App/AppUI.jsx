import React from 'react';
import { WeatherContext } from '../WeatherContext';
import { CurrenWeather } from "../CurrentWeather";
import { SearchCountries } from '../SearchCountries';
import { useContext } from 'react';
import './AppUI.css'


export function AppUI(){
  const {
    loading,
    error,
  } = useContext(WeatherContext);
  return (
    <React.Fragment>
      <div className="App">
        {error && (error)}
        <SearchCountries className='SearchCountries' />
        <CurrenWeather className='CurrenWeather' />
      </div>
    </React.Fragment>
  );
}


