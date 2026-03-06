const frases=[

"Todo lo puedo en aquel que me fortalece. Filipenses 4:13",

"El Señor es mi pastor nada me faltará. Salmo 23",

"Clama a mí y yo te responderé. Jeremías 33:3",

"Bienaventurados los de limpio corazón. Mateo 5:8",

"La verdad os hará libres. Juan 8:32"

]

function fraseAleatoria(){

let r=Math.floor(Math.random()*frases.length)

document.getElementById("frase").innerText=frases[r]

}

fraseAleatoria()
