let canvas=document.querySelector('canvas');
let ctx=canvas.getContext('2d');
let height=canvas.height;
console.log(height);
let width=canvas.width;
console.log(width);
//select four buttons 
let red=document.getElementById('red');
let black=document.getElementById('black');
let blue=document.getElementById('blue');
let green=document.getElementById('green');
//make a colour picker array
let colour="yellow";
//select colour
red.addEventListener('click',()=>{
    colour="red";
})
black.addEventListener('click',()=>{
    colour="white";
})
blue.addEventListener('click',()=>{
    colour="blue";
})
green.addEventListener('click',()=>{
    colour="green";
})

let mouse={
    x:10,
    y:10
}
console.log(mouse.x,mouse.y)

//create a big circle fit it in the center
function circle(x,y,radius,color)
{
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.color=color;
    this.update=()=>{
       this.draw();
    }
    this.draw=()=>{
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        ctx.fillStyle=this.color;
        ctx.fill();
        ctx.closePath();

    }
}
let circle1;
let circle2;
function init(){
    circle1=new circle(height,width/4,30,"black");
    circle2=new circle(undefined,undefined,20,colour);
}
addEventListener("mousemove",function(e){
    mouse.x=e.clientX; 
    mouse.y=e.clientY; 
})
console.log(mouse.y,mouse.x);
//get the distance of two circles 
let getDistance=(x1,y1,x2,y2)=>{
    let xDistance=x2-x1;
    let yDistance=y2-y1;
    return Math.sqrt(Math.pow(xDistance,2)+Math.pow(yDistance,2));
}

function animate()
{
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    circle1.update();
    circle2.x=mouse.x;
    circle2.y=mouse.y;
    circle2.update();
    //when circle meets then its collide 
    console.log(getDistance(circle1.x,circle1.y,circle2.x,circle2.y));
     if(getDistance(circle1.x,circle1.y,circle2.x,circle2.y)<(circle1.radius+circle2.radius))
     {
         circle1.color=colour;
     }
     else
     {
         circle1.color="black";
     }
}

init();
animate();


//when the user clicks colour of circle2 changes 
//which is the colour of circle 2 then should be same




