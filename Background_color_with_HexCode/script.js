var show=document.getElementById('main');
var button=document.getElementById('btn');
var hcolor=document.getElementById('haxcolor');

const color=[
    " #60d394",
    " #d36060",
    " #c060d3",
    " #d3d160",
    " #6860d3",
    " #60b2d3",

]

show.style.backgroundColor="#d36060";

const changeColor=()=>{
    var i=Math.floor(Math.random()*color.length);
    hcolor.innerText=`background color: ${color[i]}`;
    show.style.backgroundColor=color[i];
}

button.addEventListener('click',changeColor);