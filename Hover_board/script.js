 const box=document.getElementById('box');
 const msg=document.getElementById('msg');

var colors=['red','blue','yellow','green','#800020','peru','crimson'];

for(var i=0;i<500;i++){
    const div=document.createElement('div');
    div.classList.add('square');
    div.addEventListener('mouseover',() => setcolor(div));
    div.addEventListener('mouseout',() => removeColor(div));
    setInterval('setcolor(msg)',2000);
    box.appendChild(div);
}

function setcolor(element){
    var color=getRandom();
    element.style.background=`${color}`;
    element.style.boxShadow=`0px 0px 2px ${color},0px 0px 7px ${color}`;
}

function removeColor(element){
    element.style.background=`#1d1d1d`;
    element.style.boxShadow='0px 0px 2px #000';
}

function getRandom(){
    return colors[Math.round(Math.random()*colors.length)];
}

