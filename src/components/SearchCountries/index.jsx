import { useContext, useState} from "react";
import { WeatherContext } from "../WeatherContext";
import { CurrentCityList} from '../CurrentCityList/index';
import './SearchCountries.css'; 


export function SearchCountries() {

    const {loading, setSearchValue} = useContext(WeatherContext);

	const onChanges = (event) => {
		console.log(event.target.value)
		setSearchValue(event.target.value)
    }
	if (loading) {
		return <p>Cargando formularip</p>
	}

    return (
			<div className="SearchCountries--container">
				<form  onChange={onChanges} className="SearchCountries">
					<select name="pais" id="pais">
							{CurrentCityList.map(pais => 
								<option key={pais.name}value={pais.name}>{pais.name}</option>)}	
					</select>
					<button 
						type='button'
						className='buscar-boton'
						onClick={onChanges}
						>
						Buscar
      				</button>
				</form>
			</div>
        
    );
}
  