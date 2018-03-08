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
  initMap(); //version 2

})



let myTimer=()=>{
  navigator.geolocation.getCurrentPosition(showPosition,errorCallback);
  //,{frequency:1, maximumAge: 5, timeout: 4000, enableHighAccuracy:true}  trejde settingen
}
let errorCallback =function(error){
  let str = "";
  switch(error.code) {
        case error.PERMISSION_DENIED:
            str = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            str = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            str = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            str = "An unknown error occurred."
            break;
  }


  let millis = Date.now() - start;
  let secounds = Math.floor(millis/1000)
  document.getElementsByClassName('position')[0].innerHTML+=`<br/>${secounds}<br/>error.. ${str}`
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
  map = new google.maps.Map(mapDiv,mapOptions);


  //desinations.push( new google.maps.LatLng(57.668000, 12.290000));
  //desinations.push( new google.maps.LatLng(57.668000, 12.295000));
  //desinations.push( new google.maps.LatLng(57.668000, 12.298000));
  //desinations.push( new google.maps.LatLng(57.669000, 12.300000));
  //desinations.push( new google.maps.LatLng(57.670000, 12.290000));

  let PolylineOptions = {path: desinations, strokeColor:"#ff0000"};
  let Polyline = new google.maps.Polyline(PolylineOptions);

  Polyline.setMap(map);

}



var poly;
var map2;

function initMap() {
  map2 = new google.maps.Map(document.getElementById('map2'), {
    zoom: 14,
    center: {lat: 57.7038242, lng: 11.9060927}  // Center the map on Chicago, USA.
  });

  poly = new google.maps.Polyline({
    strokeColor: '#000000',
    strokeOpacity: 1.0,
    strokeWeight: 3,
    editable: true
  });
  poly.setMap(map2);

  // Add a listener for the click event
  map2.addListener('click', addLatLng);

}

// Handles click events on a map, and adds a new point to the Polyline.
function addLatLng(event) {

  var path = poly.getPath();

  // Because path is an MVCArray, we can simply append a new coordinate
  // and it will automatically appear.
  path.push(event.latLng);
  let lastNb = path.b.length-1;
  console.log(lastNb);
  console.log(path);
  if (lastNb>2){
    distance = google.maps.geometry.spherical.computeDistanceBetween(path.b[0], path.b[lastNb])
    distance = Math.floor(distance);
    console.log(distance);

  }
  // Add a new marker at the new plotted point on the polyline.
  /*
  var marker = new google.maps.Marker({
    position: event.latLng,
    title: '#' + path.getLength(),
    map: map2,
    draggable: true,
    number : path.getLength()
  });
  console.log(marker.title);

  marker.addListener('dragend', function (event) {
    console.log(this.number);
    console.log(this.getPosition().lat());
    console.log(this.getPosition().lng());
    let latitude = this.getPosition().lat();
    let longitude = this.getPosition().lng();
    let number = this.number -1
    let a = new google.maps.LatLng(latitude,longitude)
    console.log(a);
    console.log(path.b[number] = a);
    poly.setPath(path);

    let distance = 0;
    if(number==0){
      console.log("nu är den 0");
    }else{
      distance = google.maps.geometry.spherical.computeDistanceBetween(path.b[number], path.b[number-1])
      distance = Math.floor(distance);
    }

    console.log(distance);
    this.title = distance;

  });
  */
}
