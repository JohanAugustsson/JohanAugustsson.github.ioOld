window.addEventListener("load",function(event){
 let req = new XMLHttpRequest();
 let container = document.getElementsByClassName("container")[0];
 let btn = document.getElementById('btn');
 let input = document.getElementById("antal");
 let list = document.getElementsByClassName("list")[0];

 req.onreadystatechange = function(event){
   if(req.readyState===4){
     container.innerHTML = req.responseText;
     let newLi = document.createElement("li");
     newLi.innerHTML=req.responseText;
     list.appendChild(newLi);
   }

 };

 btn.addEventListener("click",function(){
   /*req.open("GET","http://mardby.se/AJK15G/lorem_text.php")*/
   req.open("GET","http://mardby.se/AJK15G/lorem_text_random.php?numberOfWords="+antal.value)
   req.send();

 });


});/*Slut på Windos Load*/
