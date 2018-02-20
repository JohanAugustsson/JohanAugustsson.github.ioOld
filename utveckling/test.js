



let i = 0;
let myTimer=()=>{
  i++
  console.log(i);
  snd.volume= 0.2;
  snd.play();
}




let snd = new Audio("../Audio/button-1.wav"); // buffers automatically when created

window.addEventListener("load",function(event){

  let btnPlaySound = document.getElementById('btn-playSound');

  btnPlaySound.addEventListener('click',function(event){
    console.log("test");
    let myWatch= setInterval(myTimer,1000);
  })


})
