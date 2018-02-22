
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
let myWatch ="";
let showPosition =(position)=>{
  //if(snapTime==position.timestamp){
  //}else{
    //snapTime=position.timestamp;
    //let time = (position.timestamp - startTime)/1000
    snapTime= Date.now();
    time = (snapTime-startTime)/1000;
    let positionContainer = document.getElementsByClassName('position')[0];
    positionContainer.innerHTML += "<p>"+"time: "+ time + "<br/>"+"latitude: "+position.coords.latitude +"<br/>"+"longitude: "+ position.coords.longitude+"</p>"
  //}
}



window.addEventListener("load",function(event){

  let btnPlaySound = document.getElementById('btn-playSound');
  let btnStopSound = document.getElementById('btn-stopSound');
  //navigator.geolocation.watchPosition(showPosition);
  btnPlaySound.addEventListener('click',function(event){
    snd.play();
    startTime = Date.now();
    myWatch= setInterval(myTimer,1000);
  })

  btnStopSound.addEventListener('click',function(event){
    clearInterval(myWatch)

  })
  mapInit();
})

/*

navigator.permissions.query({name:'geolocation'}).then(function(result) {
  console.log(result);
});
*/

let mapInit = ()=>{
  let mapDiv = document.getElementById('map');

  let centerPos = new google.maps.LatLng(57.668799, 12.292314);
  let mapOptions = {
    center: centerPos,
    zoom: 14,
    mapType: "terrain"
  }
  let map = new google.maps.Map(mapDiv,mapOptions);

  let desinations = new google.maps.MVCArray();
  desinations.push( new google.maps.LatLng(57.668000, 12.290000));
  desinations.push( new google.maps.LatLng(57.668000, 12.295000));
  desinations.push( new google.maps.LatLng(57.668000, 12.298000));
  desinations.push( new google.maps.LatLng(57.669000, 12.300000));
  desinations.push( new google.maps.LatLng(57.670000, 12.290000));

  let polygonOptions = {path: desinations, strokeColor:"#ff0000", fillColor: "#00ff00"};
  let polygon = new google.maps.Polygon(polygonOptions);

  polygon.setMap(map);

}
