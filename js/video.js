setInterval(()=>{

document.getElementById("pantallaVideo").style.display="block"

let video=document.getElementById("videoAniversario")

video.currentTime=0

video.play()

setTimeout(()=>{

document.getElementById("pantallaVideo").style.display="none"

},234000)

},60000)
