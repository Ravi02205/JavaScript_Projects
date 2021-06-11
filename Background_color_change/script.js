var show=document.getElementById('main');
var button=document.getElementById('btn');

const color=[
    " #60d394",
    " #d36060",
    " #c060d3",
    " #d3d160",
    " #6860d3",
    " #60b2d3",

]

show.style.backgroundColor="#6860d3";

const changeColor=()=>{
    let i=Math.floor(Math.random()*color.length);
    show.style.backgroundColor=color[i];
}

button.addEventListener('click',changeColor);


