import React, { useContext, useState, useEffect} from 'react';
import  GetData  from '../Utils/GetData';
import  GetDay  from '../Utils/GetDay';


const ApiContext = React.createContext();

const ApiContextProvider = ({children}) => {
  const [data, setData] =  useState({});
  const [day, SetDay] = useState({});
  const [paises, setPaises] = useState('Mexico')

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const agregarPais = pais => {
    if (pais) {
      setPaises(pais);
      console.log(pais)
    }
      
  }

  const upDateWeather = () => {
    GetData(paises)
      .then((weather)=> {
        setData(weather);
      })
    };  

  const upDateDay = () => {
      GetDay(data?.name)
        .then((time)=> {
          SetDay(time);
        })
  };
  
   
  useEffect(() => {

    upDateWeather();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paises]);

  

  useEffect(() => {
    if (data?.name) {
      upDateDay();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);



  return (
    <ApiContext.Provider value={
        {
          data,
          day,
          onSubmit: agregarPais,
          paises,
        }
      }>
      {children}
    </ApiContext.Provider>
  );
}

const useApi = () => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    return 'Hey, esto no funciona';
  }
  return context;
};

export {useApi, ApiContextProvider};