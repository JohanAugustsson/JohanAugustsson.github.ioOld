window.addEventListener("load",()=>{

  /*** Quest 11-1  *******/
  let body = document.getElementsByTagName("body")[0];
  body.getElementsByTagName("div")[0].innerHTML="HEJ DÅ!";
  /**** Quest 11-1 END ******/

  /*** Quest 11-2  *******/
  let btnPrem = document.getElementById("btn-prem");
  let oneDiv = document.getElementsByTagName('div');


  btnPrem.addEventListener("click",(event2)=>{
    oneDiv[1].innerHTML="Event: " + event2.type + "<br> Target:" + event2.target;
  });
  /*** Quest 11-2  END  *******/


  /*** Quest 11-3  *******/
  let btnStart = document.getElementById("btn-Start");
  let btnStopp= document.getElementById("btn-Stopp");
  btnStopp.disabled=true;
  btnStart.style.backgroundColor="rgb(154, 201, 86)";

  btnStart.addEventListener("click",()=>{
    btnStopp.disabled=false;
    btnStart.disabled=true;
    btnStopp.style.backgroundColor="rgb(154, 201, 86)";
    btnStart.style.backgroundColor="rgb(120, 116, 116)";
  });

  btnStopp.addEventListener("click", ()=>{
    btnStopp.disabled=true;
    btnStart.disabled=false;
    btnStart.style.backgroundColor="rgb(154, 201, 86)";
    btnStopp.style.backgroundColor="rgb(120, 116, 116)";
  });
  /*** Quest 11-3  END *******/


  /*** Quest 11-4  *******/
  let checkBox = document.getElementById("cb1");
  let disDiv = document.getElementsByClassName("text")[0];
  disDiv.style.display="none";

  checkBox.addEventListener("change",(event)=>{
    if (checkBox.checked){
      disDiv.style.display="inline-block";
    }else{
      disDiv.style.display="none";
    }
  });
  /*** Quest 11-4 END  *******/


  /*** Quest 11-5  *******/

  let rb1 = document.getElementById("rb1");
  let rb2 = document.getElementById("rb2");
  let rb3 = document.getElementById("rb3");
  let div1 = document.getElementsByClassName("textShow")[0];
  let div2 = document.getElementsByClassName("textShow")[1];
  let div3 = document.getElementsByClassName("textShow")[2];

  div1.style.display="block";
  div2.style.display="none";
  div3.style.display="none";

  rb1.addEventListener("change",function(event){
    if(this.checked){
      div1.style.display="block";
      div2.style.display="none";
      div3.style.display="none";
    }
  });
  rb2.addEventListener("change",function(event){
    if(this.checked){
      div1.style.display="none";
      div2.style.display="block";
      div3.style.display="none";
    }
  });
  rb3.addEventListener("change",function(event){
    if(this.checked){
      div1.style.display="none";
      div2.style.display="none";
      div3.style.display="block";
    }
  });
  /*** Quest 11-5  END  *******/

 /*** Quest 11-6 and 11-7 *******/
 let aside = document.getElementsByTagName("aside")[0];

 aside.addEventListener("mouseenter",function(event){
     aside.className="bg1"
     aside.style.fontSize="2em";

 });

 aside.addEventListener("mouseleave",function(event){
   aside.className="bgDefault"
   aside.style.fontSize="1em";
 });
 /*** Quest 11-6 and 11-7 END *******/

 /** Quest 11-8 *******************************/
 let footer = document.getElementsByTagName("footer")[0];
 let footerText=footer.innerHTML;
 window.addEventListener("keypress",function(e){
   footer.innerHTML=e.key;
 });
 window.addEventListener("keyup",function(e){
   footer.innerHTML=footerText;
 });

 /** Quest 11-8 END *******************************/

 /** Quest 11-9 *******************************/
let textOk = document.getElementsByTagName("textarea")[0];
let divOk= document.getElementsByClassName("textOk")[0];

textOk.addEventListener("blur",function(event){
  let a = event.target.value;
  if(isNaN(a)){
    divOk.style.color="red";
  }else{
    divOk.style.color="rgb(128, 219, 128)";
  };
  divOk.innerHTML=a;
});
 /** Quest 11-9 END****************************/


 /** Quest 11-10 *********************/
 let textArea = document.getElementsByTagName("textarea")[1];

 textArea.addEventListener("keyup",function(e){
        this.value = this.value.toUpperCase();
 });
 /** Quest 11-10 END *********************/


 /** Quest 11-11 *********************/
 let eventStatus1 = document.getElementById("eventStatus1");
 let eventStatus2 = document.getElementById("eventStatus2");
 let btnEvent1 = document.getElementById("btn-event1");
 let btnEvent2 = document.getElementById("btn-event2");
 let label1 = document.querySelector(".container-btn div:first-child label");
 let label2 = document.querySelector(".container-btn div:last-child label");

  eventStatus1.addEventListener("change",function(event){
    if(this.checked){
      label1.innerHTML="Event On"
      btnEvent1.addEventListener("click",test1);
    }else{
      label1.innerHTML="Event off"
      btnEvent1.removeEventListener("click",test1);
    };
  });

  let clicked= true;
  let test1 = function(){
    if(clicked){
      label1.className="bg1"
      clicked=false;
    }else{
      label1.className="bgDefault"
      clicked=true;
    };
  }

  eventStatus2.addEventListener("change",function(event){
    if(this.checked){
      label2.innerHTML="Event On"
      btnEvent2.addEventListener("click",test2);
    }else{
      label2.innerHTML="Event off"
      btnEvent2.removeEventListener("click",test2);
    };
  });

  let clicked2= true;
  let test2 = function(){
    if(clicked2){
      label2.className="bg1"
      clicked2=false;
    }else{
      label2.className="bgDefault"
      clicked2=true;
    };
  }
  /** Quest 11-11 END *********************/

  /** Quest 11-12 *********************/

  let cb12a = document.querySelector("#cb12a");
  let cb12b = document.querySelector("#cb12b");

    cb12a.addEventListener("click",function(event){
      if(cb12b.checked){
        event.preventDefault();
      }
    });

    cb12b.addEventListener("click",function(event){
      if(cb12a.checked){
        event.preventDefault();
      }
    });
    /** Quest 11-12 END *********************/

    /*** Quest 11-13 *************************/

    let samma = document.getElementsByClassName('samma');

    let doIt = function(event){
      if(event.target.style.backgroundColor=="black") {
        event.target.style.backgroundColor="grey"
      }else{
      event.target.style.backgroundColor="black";
      }
    }
    for(i=0;i<samma.length;i++){
      samma[i].addEventListener("click",doIt);
    }

  /*** Quest 11-13 END *************************/


});/***** END OF WINDOW LOAD EVENT ****/
