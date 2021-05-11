const cont =document.getElementById('container');
const msg=document.getElementById('msg');
const color=['#ff8888','#ffdda8','#f9ff93','#d5ffb5','#b3fdff'];
const SQUARES = 500;

msg.style.background='#ff8888';
msg.style.boxShadow="0 0 2px #ff8888,0 0 7px #ff8888";

for(let i=0;i<500;i++){
    const square=document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover',() => setColor(square));
    square.addEventListener('mouseout',() => removeColor(square));
    setInterval('setColor(msg)',2000);
    cont.appendChild(square);
}
 
function setColor(ele){
    const color=getRandomColor();
    ele.style.background=color;
    ele.style.boxShadow =`0 0 2px ${color},0 0 7px ${color}`;
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
 }
 
 function getRandomColor() {
     return color[Math.floor(Math.random() * color.length)]
 }