const display=document.querySelector("#show");
let currentinput='';
function updateDisplay() {
    display.innerText = currentinput;
}
document.getElementById('btn0').addEventListener('click',function(){
       currentinput+='0';
       updateDisplay();
}
);
document.getElementById('btn1').addEventListener('click',function(){
       currentinput+='1';
       updateDisplay();
}
);
document.getElementById('btn2').addEventListener('click',function(){
       currentinput+='2';
       updateDisplay();
}
);
document.getElementById('btn3').addEventListener('click',function(){
       currentinput+='3';
       updateDisplay();
}
);
document.getElementById('btn4').addEventListener('click',function(){
       currentinput+='4';
       updateDisplay();
}
);
document.getElementById('btn5').addEventListener('click',function(){
       currentinput+='5';
       updateDisplay();
}
);
document.getElementById('btn6').addEventListener('click',function(){
       currentinput+='6';
       updateDisplay();
}
);
document.getElementById('btn7').addEventListener('click',function(){
       currentinput+='7';
       updateDisplay();
}
);
document.getElementById('btn8').addEventListener('click',function(){
       currentinput+='8';
       updateDisplay();
}
);
document.getElementById('btn9').addEventListener('click',function(){
       currentinput+='9';
       updateDisplay();
}
);
document.getElementById('addition').addEventListener('click',function(){
       currentinput+='+';
       updateDisplay();
}
);
document.getElementById('minus').addEventListener('click',function(){
       currentinput+='-';
       updateDisplay();
}
);
document.getElementById('divi').addEventListener('click',function(){
       currentinput+='/';
       updateDisplay();
}
);
document.getElementById('star').addEventListener('click',function(){
       currentinput+='*';
       updateDisplay();
}
);
document.getElementById('point').addEventListener('click',function(){
       currentinput+='.';
       updateDisplay();
}
);
document.getElementById('C').addEventListener('click',function(){
       currentinput='';
       updateDisplay();
}
);
document.getElementById('equal').addEventListener('click',function(){
       currentinput=eval(currentinput);
       updateDisplay();
}
);
