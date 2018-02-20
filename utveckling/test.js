



let i = 0;
let myTimer=()=>{
  i++
  console.log(i);
  snd.volume= 0.2;
  snd.play();
}


let myWatch= setInterval(myTimer,1000);

let snd = new Audio("../Audio/button-1.wav"); // buffers automatically when created
