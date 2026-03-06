function iniciarParticulas(colorParticulas, velocidad, direccion="top"){

tsParticles.load("tsparticles",{

fpsLimit:60,

particles:{

number:{
value:120
},

color:{
value:colorParticulas
},

shape:{
type:"circle"
},

opacity:{
value:{min:0.3,max:0.8}
},

size:{
value:{min:1,max:4}
},

move:{
enable:true,
speed:velocidad,
direction:direccion,
outModes:{
default:"out"
}
}

},

detectRetina:true

})

}

function cambiarParticulasPorClima(clima){

if(clima.includes("cloud")){

iniciarParticulas(
["#888888","#aaaaaa","#cccccc"],
0.6,
"top"
)

}

else if(clima.includes("rain")){

iniciarParticulas(
["#6bbcff","#8fd3ff","#b8e6ff"],
1.2,
"bottom"
)

}

else if(clima.includes("wind")){

iniciarParticulas(
["#4fa3ff","#7bc0ff","#9ad4ff"],
2,
"right"
)

}

else{

// Soleado

iniciarParticulas(
["#FFD700","#FFC107","#FFEB3B"],
0.8,
"top"
)

}

}
