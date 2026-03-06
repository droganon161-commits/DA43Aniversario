const api="https://api.open-meteo.com/v1/forecast?latitude=20.97&longitude=-89.62&current_weather=true"

fetch(api)

.then(res=>res.json())

.then(data=>{

const clima=data.current_weather

document.getElementById("clima").innerHTML=

"🌡 "+clima.temperature+"°C"

})

function actualizarHora(){

let ahora=new Date()

let hora=ahora.getHours()

let saludo=""

if(hora<12) saludo="Buenos días"
else if(hora<19) saludo="Buenas tardes"
else saludo="Buenas noches"

document.getElementById("saludo").innerText=saludo

document.getElementById("hora").innerText=

ahora.toLocaleTimeString()

}

setInterval(actualizarHora,1000)
