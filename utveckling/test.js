



let i = 0;
let myTimer=()=>{
  i++
  console.log(i);
  snd.volume= 0.2;
  snd.play();
  //navigator.geolocation.getCurrentPosition(showPosition);

}



let snd = new Audio("../Audio/button-1.wav"); // buffers automatically when created

window.addEventListener("load",function(event){

  let btnPlaySound = document.getElementById('btn-playSound');
  btnPlaySound.addEventListener('click',function(event){
    console.log("test");
    let myWatch= setInterval(myTimer,1000);
  })

  navigator.geolocation.watchPosition(showPosition);

})


let showPosition =(position)=>{
  let a = position
  let positionContainer = document.getElementsByClassName('position')[0];
  positionContainer.innerHTML += "<p>"+a.coords.latitude +"<br/>"+ a.coords.longitude+"</p>"
  console.log(position);
}
