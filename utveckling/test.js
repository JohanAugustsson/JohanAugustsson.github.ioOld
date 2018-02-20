



let i = 0;
let myTimer=()=>{
  i++
  console.log(i);
  snd.volume= 0.2;
  snd.play();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let snapTime = "";
let startTime = 0;
let showPosition =(position)=>{
  if(snapTime==position.timestamp){
  }else{
    snapTime=position.timestamp;
  let positionContainer = document.getElementsByClassName('position')[0];
  //positionContainer.innerHTML += "<p>"+ now +"<br/>"+position.coords.latitude +"<br/>"+ position.coords.longitude+"</p>"
  positionContainer.innerHTML += "<p>"+"time: "+ ((position.timestamp - startTime)/1000) + "<br/>"+"latitude: "+position.coords.latitude +"<br/>"+"longitude: "+ position.coords.longitude+"</p>"
  }
}


let snd = new Audio("../Audio/button-1.wav");

window.addEventListener("load",function(event){
  let btnPlaySound = document.getElementById('btn-playSound');
  startTime = Date.now();
  //navigator.geolocation.watchPosition(showPosition);
  btnPlaySound.addEventListener('click',function(event){
    let myWatch= setInterval(myTimer,2000);
  })
})


navigator.permissions.query({name:'geolocation'}).then(function(result) {
  console.log(result);
});
