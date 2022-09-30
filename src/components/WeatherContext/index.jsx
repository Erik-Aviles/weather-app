import React, { useState} from "react";
import { useLocalStorage } from "./useLocalStore";

 const WeatherContext = React.createContext();

 function TodoProvider(props) {
  const {
    item: paises,
    error,
    loading
  } = useLocalStorage('PAISES_1', []);

  const [searchValue, setSearchValue] = useState('');

// ------------ Hasta aqui arreglado
 
  return (
    <WeatherContext.Provider value={{
      loading,
      error,
      searchValue,
      setSearchValue,
    }}>
      {props.children}
    </WeatherContext.Provider>
  );
}

export { WeatherContext, TodoProvider};