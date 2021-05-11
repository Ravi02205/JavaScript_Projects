var crds = document.querySelectorAll('.img');
 crds.forEach(element => {
     element.addEventListener('click',()=>{
         removeClass();
         element.classList.add('active');
     })
 });

 function removeClass(){
     crds.forEach(element =>{
        element.classList.remove('active');
     }) 
};