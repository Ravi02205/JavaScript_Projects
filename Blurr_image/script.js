const img=document.getElementById('container');
const txt=document.getElementById('txt');

let int = setInterval(blurring, 24);

var load=0;

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int);
  }

  txt.innerText = `${load}%`;
  txt.style.opacity = `${1-load/100}`;
  img.style.filter = `blur(${100-load}px)`;
}