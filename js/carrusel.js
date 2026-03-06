const carrusel=document.getElementById("carrusel")

const imagenes=[]

for(let i=1;i<=8;i++){

imagenes.push("fotos/"+i+".jpg")

}

imagenes.forEach((src,index)=>{

let slide=document.createElement("div")

slide.classList.add("slide")

if(index===0){

slide.classList.add("activo")

}

let img=document.createElement("img")

img.src=src

slide.appendChild(img)

carrusel.appendChild(slide)

})

setInterval(()=>{

let slides=document.querySelectorAll(".slide")

let actual=document.querySelector(".slide.activo")

let index=Array.from(slides).indexOf(actual)

actual.classList.remove("activo")

slides[(index+1)%slides.length].classList.add("activo")

},5000)
