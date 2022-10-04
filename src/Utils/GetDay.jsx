
const GetDay = async (name) => {
  let urlApi = null; 
  urlApi = `${process.env.REACT_APP_API}forecast?q=${name}&lang=es&appid=${process.env.REACT_APP_API_KEY}&units=metric`
  const res = await fetch(urlApi);
  const time = await res.json();
  console.log(time);

  return time;
};
export default GetDay;




