var input=document.getElementById("input");
var btn=document.getElementById("btn");
var notes=document.getElementById("notes");
btn.addEventListener("click",()=>{
    let para=document.createElement("p");
    para.setAttribute('id','para'); 
    if(input.value===''){
        alert('Enter The Text');
    }else{
    para.innerHTML=input.value;
    notes.appendChild(para);
    }
    para.addEventListener('click',()=>{
        para.style.textDecoration="line-through";
    });

    var index;
    para.addEventListener('dblclick',()=>{
        notes.removeChild(para);
    });
    input.value='';
});


