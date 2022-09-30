import React, { useEffect, useState} from 'react';
import './CurrentWeather.css';
import { GetData } from '../Utils'

export const CurrenWeather = () => {

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const upDateWeather = () => {
     GetData()
     .then(newWeather=> {
        setWeather(newWeather)
        console.log(newWeather) 
        setLoading(false)
      })
    }
    
  useEffect(() => {
    upDateWeather()
  }, [])


  if (loading) {
    return <p>Cargando los climas</p>
  }

  const fecha = new Date();  

  return (

    <section className='currentWeather'>
        <div className="currentWeather--actual currentWeather--box">
          <div>
            <h1>{weather.name}</h1>
            <span>Zona Horaria: {weather.timezone}</span>
          </div>
          <div className="currentWeather--imgs">
            {weather.weather.map((type) => 
            <img key={type.id} src={`http://openweathermap.org/img/wn/${type.icon}@2x.png`} alt="Weather" />)}
             {weather.weather.map((type) => 
            <p key={type.id}>{type.description}</p>)}
           
          </div>
        </div>

        <div className="currentWeather--details currentWeather--box">
          <span className="cuerrentWeather--stats cuerrentWeather--stats-temp">{weather.main.temp}°C</span>
          <div>
            <h3>Detalles</h3>       
            <ul> 
              <li>
                <span >Se siente como </span>
                <span className="cuerrentWeather--stats stats">{weather.main.temp} °C</span>
              </li>
              <li>
                <span>Viento </span>
                <span className="cuerrentWeather--stats stats">{weather.wind.speed} m/s</span>
              </li>
              <li>
                <span>Humedad </span>
                <span className="cuerrentWeather--stats stats">{weather.main.humidity} %</span>
              </li>
              <li>
                <span>Presion </span>
                <span className="cuerrentWeather--stats stats">{weather.main.pressure} hPa</span>
              </li>
            </ul>
          </div>
          
        </div>
        <div className='curentTim0e'>
          {fecha.toLocaleString()}
        </div>

    </section>
  )
}



