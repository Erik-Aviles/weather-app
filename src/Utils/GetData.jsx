/* import { useApi } from "../context/ApiContext"; */
/* import { random} from "../components/CurrentCityList";  */




const GetData = async (paises) => {

/* const paises = useApi()  */
let urlApi = null;
urlApi = `${process.env.REACT_APP_API}weather?q=${paises}&lang=es&appid=${process.env.REACT_APP_API_KEY}&units=metric`
const res = await fetch(urlApi);
const data = await res.json();
console.log(paises);


  return data;
};
export default GetData;










