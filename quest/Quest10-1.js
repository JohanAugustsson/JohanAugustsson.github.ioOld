window.addEventListener("load",()=>{




/******** QUEST 10-1 ************************************/
let container = document.getElementById("container");

container.innerHTML="<p>Quest 10-1: Text har bytts :P</p>";
container.innerText+="<p>Quest 10-1: Text har bytts :P</p>";
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
console.log(wrapper.childNodes);

btnWriteToDiv.addEventListener("click",()=>{
  let sum ="";
  function doShit(current, depth) {
    let children = current.childNodes;

    for (var i = 0, len = children.length; i < len; i++) {
        if (children[i].nodeName!="#text"){
          sum+=(children[i].nodeName)+"<br>";

        }

        doShit(children[i], depth + 1);
    }
  }
  doShit(wrapper, 0);
  wrapper.innerHTML+= wrapper.childNodes.length+"st childs (#text removed)<br>"+(sum);
});

/*************** QUEST 10-6 END **************************************/

/*************** QUEST 10-7  **************************************/
let btnErase = document.getElementById("btn-remove-tag");
let body = document.getElementsByTagName('body')[0];
let erase = document.getElementById('hej');

let remove ="";

let clicked2 =false;

btnErase.addEventListener("click",function(){
  if(clicked2){
      body.appendChild(remove);
      clicked2=false;
  }else{
    remove= body.removeChild(erase);
      clicked2=true;
  }



});

/*************** QUEST 10-8  **************************************/
  let btnMoveLi = document.getElementById("btn-change-list");
  let parentList = document.getElementById("lists");
  let firstList = parentList.getElementsByTagName("ul")[0];
  let secondList = parentList.getElementsByTagName("ul")[1];
  let removedFromList = "";

  btnMoveLi.addEventListener("click",()=>{
    let move = firstList.getElementsByTagName("li")[0];

    if (move!==undefined){
      removedFromList = firstList.removeChild(move);
      secondList.appendChild(removedFromList);
    }else{
      console.log("no more in the list to move");
    };


  });



/*************** QUEST 10-8 END  **************************************/

}); /***** ENd For load ***/
