import React from 'react';
import { Day } from '../Day';
import { useApi } from '../../context/ApiContext';
import './ListDay.css';


const ListDay = () => {

  const weather = useApi()
  if (!weather){
    return <p>Cargando List Day</p>
  }
  
  return (
    <div className='content-ListDay'>
      <div className='title-pais'>
        <h1>{weather?.day?.city?.name},</h1>
        <span>{weather?.day.city?.country}</span></div>
      <h2> Pronoatico del tiempo para 5 dias</h2>
      <ul>
        {weather?.day?.list?.map((data, dt)=> <Day key={dt} {...data} />)}
      </ul>
    </div>
  )
}
export default ListDay;

