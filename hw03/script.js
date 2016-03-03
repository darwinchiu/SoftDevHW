var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var button = document.getElementById("dvd");
var sbutton = document.getElementById("stop");

var xcor = c.width/2;
var ycor = c.height/2;
var x = 1;
var y = 1;
var image = new Image();
image.src = "DVD_Logo.jpg";
var frameid;

var dvd = function() {
    window.cancelAnimationFrame(frameid);
    
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.drawImage(image,xcor,ycor,100,100);

    xcor += x;
    ycor += y;
    
    if(xcor <= 5 || xcor >= 325){
	x = -x;
    }
    if(ycor <= 5|| ycor >= 380){
	y = -y;

    }

    frameid = window.requestAnimationFrame(dvd);

};

var stop = function() {
    window.cancelAnimationFrame(frameid);
};

button.addEventListener("click",dvd);
sbutton.addEventListener("click",stop);
