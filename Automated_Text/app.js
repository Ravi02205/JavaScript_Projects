const text=document.getElementById('text');
const sped=document.getElementById('speed');
const t=["Hey! How you doing???","Programmer","UI design"];
var j=0;
var spd=400/sped.value;
let i=1;
let o=0;
function autoText(){
    txt=t[j];
    if(i<=txt.length && o==0){
        i++;
        text.innerHTML=txt.slice(0,i);
        if(i>txt.length){
            o=1;
        }
    }

    if(o==1){
        i--;
        text.innerHTML=txt.slice(0,i);
        if(i<=0){
            o=0;
            j++;
        }
    }

    if(j>=t.length){
        j=0;
    }

    setTimeout(autoText,spd);
}

sped.addEventListener('input',()=>{
    spd=400/sped.value;
});

autoText();