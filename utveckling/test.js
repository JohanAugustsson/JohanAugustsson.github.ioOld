let snd = new Audio("../Audio/button-1.wav");

window.addEventListener("load",function(event){
  let btnPlaySound = document.getElementById('btn-playSound');
  let btnStopSound = document.getElementById('btn-stopSound');
  btnPlaySound.addEventListener('click',function(event){
    document.getElementsByClassName('position')[0].innerHTML="Körs.."
    myWatch= setInterval(myTimer,5000);
  })

  btnStopSound.addEventListener('click',function(event){
    document.getElementsByClassName('position')[0].innerHTML="Stoppad"
    clearInterval(myWatch)
  })

  mapInit();

})



let myTimer=()=>{
  navigator.geolocation.getCurrentPosition(showPosition,errorCallback,{frequency:5000, maximumAge: 0, timeout: 300, enableHighAccuracy:false});
}
let errorCallback =function(){
  console.log("error");
}




let desinations=[];
let showPosition =(position)=>{
  let positionContainer = document.getElementsByClassName('position')[0];
  positionContainer.innerHTML = "<p> latitude: "+position.coords.latitude +"<br/>"+"longitude: "+ position.coords.longitude+"</p>"
  desinations.push(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));

}

let mapInit = ()=>{
  let mapDiv = document.getElementById('map');
  desinations = new google.maps.MVCArray();
  let centerPos = new google.maps.LatLng(57.7038242,11.9060927);

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
