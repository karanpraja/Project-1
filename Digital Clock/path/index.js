const hourEl=document.getElementById("hour");
const minuteEl=document.getElementById("minutes");
const secondEl=document.getElementById("seconds");
const ampmEl=document.getElementById("ampm");
function updateClass(){
let h= new Date().getHours();
let m= new Date().getMinutes();
let s= new Date().getSeconds();
let ampm="AM";
if(h>12)
{
    h=h-12
    ampm="PM"
}
hourEl.innerText=h;
minuteEl.innerText=m;
secondEl.innerText=s;
ampmEl.innerText=ampm;
setTimeout(()=>{
    updateClass();
},1000)
}
updateClass();