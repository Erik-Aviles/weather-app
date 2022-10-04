

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

export const random = currentCityList[Math.floor(Math.random()*currentCityList.length-1)+1]


  console.log(random);