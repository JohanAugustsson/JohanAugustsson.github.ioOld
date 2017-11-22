window.addEventListener("load",function(event){

  let req = new XMLHttpRequest();
  let btnlogIn = document.getElementById("btnlogIn");
  let logInName= document.getElementById("logInName");
  let output = document.getElementsByClassName("output")[0];
  let keyText = document.getElementById("logInPassword");
  keyText.disabled=true;


  let clicked = true;
  btnlogIn.addEventListener("click", function(){

    if (clicked==true){
      let name = (logInName.value);
      req.open("GET","http://forverkliga.se/JavaScript/api/ajax-lab.php?register=true&name="+name);
      req.send();
      clicked=false;
      keyText.disabled=false;
    }else{

      console.log(keyText.value);
      req.open("GET","http://forverkliga.se/JavaScript/api/ajax-lab.php?finish=true&key="+keyText.value);
      req.send();
      clicked=true;
      keyText.disabled=true;
    }





  });

  req.onreadystatechange = function(event){
    if(req.readyState===4){

      if (clicked==false) {
        console.log(req);
        let obj = (JSON.parse(req.responseText));
        output.getElementsByTagName("p")[0].innerHTML= "Login password: " + obj.key;
      }else{
        console.log(req);
        let obj = req.responseText;
        output.getElementsByTagName("p")[0].innerHTML= obj
      };

    }
  }


});
