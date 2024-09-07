// const display=document.querySelector("#show")
// let currentinput ='';
// function updatedisplay(){
//     display.innerText=currentinput;
// }
// function handleclick(value){
// if(value=='C'){
//     currentinput='';
// }
// else if(value==="="){
//     currentinput=eval(currentinput);
// }
// else{
//         currentinput += value;
// }
// updatedisplay();
// }
//     document.getElementById('btn0').addEventListener('click', () => handleclick('0'));
//     document.getElementById('btn1').addEventListener('click', () => handleclick('1'));
//     document.getElementById('btn2').addEventListener('click', () => handleclick('2'));
//     document.getElementById('btn3').addEventListener('click', () => handleclick('3'));
//     document.getElementById('btn4').addEventListener('click', () => handleclick('4'));
//     document.getElementById('btn5').addEventListener('click', () => handleclick('5'));
//     document.getElementById('btn6').addEventListener('click', () => handleclick('6'));
//     document.getElementById('btn7').addEventListener('click', () => handleclick('7'));
//     document.getElementById('btn8').addEventListener('click', () => handleclick('8'));
//     document.getElementById('btn9').addEventListener('click', () => handleclick('9'));
//     document.getElementById('addition').addEventListener('click', () => handleclick('+'));
//     document.getElementById('minus').addEventListener('click', () => handleclick('-'));
//     document.getElementById('divi').addEventListener('click', () => handleclick('/'));
//     document.getElementById('star').addEventListener('click', () =>handleclick('*'));
//     document.getElementById('point').addEventListener('click', () => handleclick('.'));
//     document.getElementById('C').addEventListener('click', () => handleclick('C'));
//     document.getElementById('equal').addEventListener('click', () => handleclick('='));

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
