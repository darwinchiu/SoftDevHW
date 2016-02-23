var c = document.getElementById("dots");
var ctx = c.getContext("2d");
var xcor;
var ycor;


var draw = function draw(e){
    ctx.beginPath();
    ctx.arc(e.pageX,e.pageY,5,0,2*Math.PI);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.stroke();
    ctx.moveTo(e.pageX,e.pageY);
    ctx.lineTo(xcor,ycor);
    ctx.stroke();
    xcor = e.pageX;
    ycor = e.pageY;
}

c.addEventListener("click",draw);

var clear = function clear(e){
    ctx.clearRect(0,0,500,500);
    xcor = undefined;
    ycor = undefined;
}

var button = document.getElementById("button");
button.addEventListener("click",clear);
