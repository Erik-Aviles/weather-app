import { useApi } from '../../context/ApiContext'
import { useState } from 'react';
import './SearchCountries.css'; 




const SearchCountries = ()  => {
 const { 
  onSubmit
  } = useApi()

  const [value, setValue] = useState('');


  const handleInputChange = (event) => {
    setValue(event.target.value);
  } 

  const handleSubmit = (event) => {
    event.preventDefault();
    const addPais = {
    id: Date.now(),
    texto: value
   }
   onSubmit(addPais.texto); 
  }
  
    return (
			<div className="SearchCountries--container">
				<form 
          className='SearchCountries'
          onSubmit={handleSubmit}>
          <label>
            Escriba un pais de LATAM:
          </label >
          <div className='SearchCountries-input-button'>
            <input 
              type='text'
              placeholder='Ecuador' 
              onChange={handleInputChange} 
              value={value} 
              name='value' 
              />    
            <button 
            type='submit'
              className='buscar-boton'
            >
              Buscar
            </button> 
          </div>        
				</form>
		</div>
        
    );
}
export default SearchCountries;

/*   const handleInputChange = (event) => {
      const changeFormValue = {
        ...formValue,
        [event.target.name]: event.target.value
      } 
      setValue(changeFormValue);
    } */