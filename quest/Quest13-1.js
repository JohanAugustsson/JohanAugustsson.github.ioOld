
window.addEventListener("load",function(){
  let output = document.getElementById("output");
  let btnSend = document.getElementById("btnSend");


  function sendRequest(){
    fetch(`https://forverkliga.se/JavaScript/api/simple.php`)
    .then(function(response){
      response=response.json();
      console.log(response.message);


      return response;


    }).then(function(answer){
      console.log(answer);
      output.innerHTML=answer.message + "<br>" + answer.info;

      for(x in answer){
        console.log(x);
        output.innerHTML += "<br>"+ x;
      }
    })
  };

  sendRequest();
});
