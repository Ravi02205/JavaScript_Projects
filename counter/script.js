// var main=document.getElementById('container');
// var video = document.getElementById('video');
var text=document.getElementById('text');
var i=5;

function counter(){

    if(i==0){
      
        text.innerHTML="HEY..";
        return;
    }

    text.innerHTML=i;
    i--;

    setTimeout("counter()",1000);
}

window.onload=counter;