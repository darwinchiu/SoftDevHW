var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var image = new Image();
var button = document.getElementById("dvd");

var xcor = c.width/2;
var ycor = c.height/2;
image.src = "DVD_Logo.jpg";

var dvd = function() {
    var x;
    var y;
    
    if (xcor = c.width) {
	x = -1;
    }
    if (xcor = 0) {
	x = 1;
    }
    if (ycor = c.height) {
	y = -1;
    }
    if (ycor = 0) {
	y = 1;
    }

    xcor += x;
    ycor += y;

    ctx.clearRect(0,0,c.width,c.height);
    ctx.beginPath();
    ctx.drawImage(image,xcor,ycor,100,100);

    window.requestAnimationFrame(dvd);

};

button.addEventListener("click",dvd);


