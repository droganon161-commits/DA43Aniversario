const evento = new Date("2026-11-07T00:00:00")

function actualizarContador(){

const ahora = new Date()

const diferencia = evento - ahora

const meses = Math.floor(diferencia/(1000*60*60*24*30))

const dias = Math.floor((diferencia/(1000*60*60*24))%30)

const horas = Math.floor((diferencia/(1000*60*60))%24)

const minutos = Math.floor((diferencia/(1000*60))%60)

const segundos = Math.floor((diferencia/1000)%60)

document.getElementById("meses").innerText=meses
document.getElementById("dias").innerText=dias
document.getElementById("horas").innerText=horas
document.getElementById("minutos").innerText=minutos
document.getElementById("segundos").innerText=segundos


let totalDias=365

let restantes=Math.floor((evento-ahora)/(1000*60*60*24))

let progreso=((totalDias-restantes)/totalDias)*100

document.getElementById("barraProgreso").style.width=progreso+"%"

document.getElementById("textoBarra").innerText=
"Faltan "+restantes+" días"

}

setInterval(actualizarContador,1000)
