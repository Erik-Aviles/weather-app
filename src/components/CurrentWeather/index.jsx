import React from 'react';
import { useApi } from '../../context/ApiContext';
import './CurrentWeather.css';

const CurrenWeather = () => {

  const weather = useApi()
  
  if (!weather) {
    return <p>Cargando... clima</p>
  }  


  console.log(weather);

  const fecha = new Date();  

  return (

    <section className='currentWeather'>
      <div className="currentWeather--actual currentWeather--box">
        <div>
            <h1>{weather?.data.name}</h1>
            <span>Zona Horaria: {weather?.data?.timezone}</span>
        </div>
        
        <div className="currentWeather--imgs">
          {weather?.data?.weather?.map((type) => 
          <img key={type?.id} src={`http://openweathermap.org/img/wn/${type?.icon}@2x.png`} alt="Weather" />)}
          {weather?.data?.weather?.map((type) => 
          <p key={type?.id}>{type?.description}</p>)}
        </div>
      </div>

      <div className="currentWeather--details currentWeather--box">
        <span className="cuerrentWeather--stats cuerrentWeather--stats-temp">{weather?.data?.main?.temp}°C</span>
        <div className='currentWeather--details--description'>
          <h3>Detalles</h3>       
          <ul> 
            <li>
              <span >Se siente como </span>
              <span className="cuerrentWeather--stats stats">{weather?.data.main?.temp} °C</span>
            </li>
            <li>
              <span>Viento </span>
              <span className="cuerrentWeather--stats stats">{weather?.data?.wind?.speed} m/s</span>
            </li>
            <li>
              <span>Humedad </span>
              <span className="cuerrentWeather--stats stats">{weather?.data?.main?.humidity} %</span>
            </li>
            <li>
              <span>Presion </span>
              <span className="cuerrentWeather--stats stats">{weather?.data?.main?.pressure} hPa</span>
            </li>
          </ul>
        </div>
          
      </div>   
      <div className='curentTim0e'>
        {fecha.toLocaleString()}
      </div>
    </section>
  )
};

export default CurrenWeather;



