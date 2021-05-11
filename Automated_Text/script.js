const text=document.getElementById('text');
const sped=document.getElementById('speed');
const txt="Hey! How you doinn???"
let id=1;
let speed=270 / sped.value;

WriteNext();
var o=0;
function WriteNext(){
    text.innerHTML=txt.slice(0,id);
   
    if(id<txt.length && o==0 ){
        id++;
        if(id==txt.length){
            o=1;
        }
    }

    if(id<=txt.length && o==1){
        id--;
        if(id==0){
            o=0;
        }
    }
    setTimeout(WriteNext,speed);
}

sped.addEventListener('input', (e) => {speed = 300 / e.target.value; 
    console.log(e.target);})
