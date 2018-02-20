
let snd = new Audio("../Audio/button-1.wav");

//lock.unlock();//

let i = 0;
let myTimer=()=>{
  i++
  console.log(i);
  snd.volume= 0.5;
  snd.play();
  navigator.geolocation.getCurrentPosition(showPosition);
  //navigator.geolocation.watchPosition(showPosition);
}

let snapTime = "";
let startTime = 0;
let showPosition =(position)=>{
  //if(snapTime==position.timestamp){
  //}else{
    snapTime=position.timestamp;
    let time = (position.timestamp - startTime)/1000
    let positionContainer = document.getElementsByClassName('position')[0];
    positionContainer.innerHTML += "<p>"+"time: "+ time + "<br/>"+"latitude: "+position.coords.latitude +"<br/>"+"longitude: "+ position.coords.longitude+"</p>"
  //}
}



window.addEventListener("load",function(event){

  let btnPlaySound = document.getElementById('btn-playSound');
  //navigator.geolocation.watchPosition(showPosition);
  btnPlaySound.addEventListener('click',function(event){
    snd.play();


    startTime = Date.now();
    let myWatch= setInterval(myTimer,1000);
  })
})

/*

navigator.permissions.query({name:'geolocation'}).then(function(result) {
  console.log(result);
});
*/
