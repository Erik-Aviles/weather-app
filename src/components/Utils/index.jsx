import React, {useState, useEffect} from 'react';

const currentCityList = [
  'Argentina',  
  'Bolivia',
  'Brasil' ,
  'Chile',
  'Colombia' ,
  'Costa Rica' ,
  'Cuba',
  'Ecuador' ,
  'Salvador' ,
  'Guatemala' ,
  'Haití' ,
  'Honduras' ,
  'México' ,
  'Nicaragua' ,
  'Panama' ,
  'Paraguay' ,
  'Perú' ,
  'República Dominicana' ,
  'Uruguay' ,
  'Venezuela',
 ]

const pais = 'Guatemala';

export const GetData = async () => {

  const urlApi = `${process.env.REACT_APP_API}weather?q=${pais}&lang=es&appid=${process.env.REACT_APP_API_KEY}&units=metric&`;
    const res = await fetch(urlApi);
    const weather = await res.json();

  return weather;
}




