let snd = new Audio("../Audio/button-1.wav");
let snapTime = "";
let startTime = 0;
let myWatch ="";


window.addEventListener("load",function(event){
  let btnPlaySound = document.getElementById('btn-playSound');
  let btnStopSound = document.getElementById('btn-stopSound');
  btnPlaySound.addEventListener('click',function(event){
    snd.play();
    startTime = Date.now();
    myWatch= setInterval(myTimer,5000);
  })

  btnStopSound.addEventListener('click',function(event){
    clearInterval(myWatch)
  })

  mapInit();
})


let errorCallback =function(){
  console.log("error");
}


let showPosition =(position)=>{
    snapTime= Date.now();
    time = (snapTime-startTime)/1000;
    let positionContainer = document.getElementsByClassName('position')[0];
    positionContainer.innerHTML = "<p>"+"time: "+ time + "<br/>"+"latitude: "+position.coords.latitude +"<br/>"+"longitude: "+ position.coords.longitude+"</p>"


    desinations.push(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));

    console.log(desinations);
}


let desinations=[];

let i = 0;
let myTimer=()=>{
  i++
  console.log(i);
  snd.volume= 0.2;
  snd.play();

  //desinations.push( navigator.geolocation.getCurrentPosition());
  navigator.geolocation.getCurrentPosition(showPosition,errorCallback,{frequency:5000, maximumAge: 0, timeout: 300, enableHighAccuracy:false});
}
// /{frequency:5000, maximumAge: 0, timeout: 100, enableHighAccuracy:false}
let getPos= function(position){
  return position
}


let mapInit = ()=>{
  let mapDiv = document.getElementById('map');
  desinations = new google.maps.MVCArray();
  //let pos= navigator.geolocation.getCurrentPosition(getPos);
  //console.log(pos);
  let centerPos = new google.maps.LatLng(57.7038242,11.9060927);
  //let centerPos = new google.mamps.LatLng(pos);
  let mapOptions = {
    center: centerPos,
    zoom: 14,
    mapType: "terrain"
  }
  let map = new google.maps.Map(mapDiv,mapOptions);


  //desinations.push( new google.maps.LatLng(57.668000, 12.290000));
  //desinations.push( new google.maps.LatLng(57.668000, 12.295000));
  //desinations.push( new google.maps.LatLng(57.668000, 12.298000));
  //desinations.push( new google.maps.LatLng(57.669000, 12.300000));
  //desinations.push( new google.maps.LatLng(57.670000, 12.290000));

  let PolylineOptions = {path: desinations, strokeColor:"#ff0000"};
  let Polyline = new google.maps.Polyline(PolylineOptions);

  Polyline.setMap(map);

}
