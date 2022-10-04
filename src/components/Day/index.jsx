import React from 'react';
import './Day.css';

export const Day = (data, temp) => {

  if (!data) {
    return <p>Cargando day</p>
  }

  return (
    <li className='card-list'>
      <span className='time'>Fecha: {data.dt_txt}</span>
      <h3>Tiempo</h3>
        <img key={data.id} src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].main} />
        <span className='italic'>`{data.weather[0].description}`</span>
      <p> Temperatura: <span className='temp'> {data.main.temp} °C</span></p>
      <span className='time'>{data.sys.pod}</span>
    </li>
  )
}


