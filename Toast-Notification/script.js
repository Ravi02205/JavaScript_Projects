const btn=document.getElementById("btn");
const container=document.getElementById("container");

btn.addEventListener('click',() => {
creatnotification();
});

function creatnotification()
{
    const notif = document.createElement('div');
    notif.classList.add('toast');
     
    notif.innerText='Your future is in dark';
   
    container.appendChild(notif);
    
    setTimeout(()=>
    {
        notif.remove();

    },3000);
}