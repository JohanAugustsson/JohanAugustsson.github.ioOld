/******** QUEST 10-1 ************************************/
let container = document.getElementById("container");

container.innerHTML="Quest 10-1: Text har bytts :P"
/****** QUEST 10-1 END ********************************/

/******** QUEST 10-2 ************************************/
let btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
  let list = document.getElementById("list");
  let newLi = document.createElement("li");
  newLi.innerText="Dont Starve";
  list.appendChild(newLi);
})
/******** QUEST 10-2  END ************************************/

/******** QUEST 10-3 ************************************/
let btnChangeText = document.getElementById("btn-change-text");
let defaultList= [];
let someDiv = document.getElementsByClassName("someDiv");
for(text of someDiv){
  defaultList.push(text.innerHTML);
};

let clicked = false;
btnChangeText.addEventListener("click",()=>{
  console.log(defaultList[1]);
  if(clicked){
    for(i=0; i<someDiv.length; i++){
      someDiv[i].innerHTML=defaultList[i];
    }
    clicked=false;
  }else{
    for(text of someDiv){
      text.innerHTML="tomte";
    }
    clicked=true;
  }
  console.log("klicked"+clicked);

});

/******** QUEST 10-3  END ************************************/

/******** QUEST 10-4 ************************************/
let btnChangeBg = document.getElementById("btn-change-bg");
btnChangeBg.className= "bg2";

btnChangeBg.addEventListener("click",()=>{
  if (btnChangeBg.className=="bg1"){
    btnChangeBg.className="bg2";
  }else{
    btnChangeBg.className="bg1";
  };
});
/******** QUEST 10-4 END  ************************************/

/******** QUEST 10-5 ************************************/
let btnChangeSection = document.getElementById("btn-change-section");
let section = document.getElementsByTagName("section");

btnChangeSection.addEventListener("click",()=>{
  for(sect of section){
    if(sect.className=="bg1"){
      sect.className="bg2";
    }else{
      sect.className="bg1";
    }
  }
});
/*************** QUEST 10-5 END **********************************/

/*************** QUEST 10-6 **************************************/

let btnWriteToDiv = document.getElementById("btn-write-div");
let wrapper = document.getElementById("wrapper");
/*console.log(wrapper.childNodes);*/

btnWriteToDiv.addEventListener("click",()=>{

  let doShit=(wrapper,x)=>{


      var child = wrapper.childNodes;
      for(var i = 0, len = child.length; i<len; i++){
        console.log(child);
        doShit(child[i], x+1);

      }
  }


  doShit(wrapper,0);

});
