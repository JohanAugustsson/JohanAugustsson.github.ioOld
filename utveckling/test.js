let snd = new Audio("../Audio/button-1.wav");
let start = "";

window.addEventListener("load",function(event){
  let btnPlaySound = document.getElementById('btn-playSound');
  let btnStopSound = document.getElementById('btn-stopSound');
  btnPlaySound.addEventListener('click',function(event){
    start = Date.now();
    document.getElementsByClassName('position')[0].innerHTML+="Körs.."
    myWatch= setInterval(myTimer,5000);
  })

  btnStopSound.addEventListener('click',function(event){
    document.getElementsByClassName('position')[0].innerHTML+="<br/> Stoppad"
    clearInterval(myWatch)
  })

  mapInit();

})



let myTimer=()=>{
  navigator.geolocation.getCurrentPosition(showPosition,errorCallback,{frequency:1, maximumAge: 5, timeout: 4000, enableHighAccuracy:true});

}
let errorCallback =function(response){
  let millis = Date.now() - start;
  let secounds = Math.floor(millis/1000)
  document.getElementsByClassName('position')[0].innerHTML+=`<br/>${secounds}<br/>error.. could not read geo`
  console.log("error");
}




let desinations=[];
let showPosition =(position)=>{
  let millis = Date.now() - start;
  let secounds = Math.floor(millis/1000)
  let positionContainer = document.getElementsByClassName('position')[0];
  positionContainer.innerHTML += `<br/>${secounds}<p> latitude: ${position.coords.latitude} <br/> longitude: ${position.coords.longitude}</p>`
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
