"use strict";

let im1 =  document.getElementById('im1');
let im2 =  document.getElementById('im2');
let im3 =  document.getElementById('im3');
let im4 =  document.getElementById('im4');
let container = document.getElementById('container');	
let pos = 0;
container.addEventListener('wheel', (event)=>{
if (event.deltaY>0)	pos+=1;
else if (event.deltaY<0) pos-=1;
if(pos>=230) pos = 0;
if (pos<=-230) pos = 0; 
im2.style.left = pos*0.8+'%';
im1.style.left = -pos*5+"px";
im3.style.left =-pos*0.8+"px";
im4.style.left = pos*0.6+"px";
console.log(pos)
})  		
