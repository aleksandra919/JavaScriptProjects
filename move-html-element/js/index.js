let box = document.getElementById("axis");

function move(x,y) {
  let box = document.getElementById("axis");
  box.style.transform = "translate(" +  x + 'px,' + y + 'px)';
  console.log(box.style.transform);
};

function myFunction() {
  myVar = setInterval(interval, 1000); 
};

var x = 60;
var y = 40;

function interval() {
  move(x,y);
  x = x + 60;
  y = y*(-1);
  if(x > 1320 ) {
    clearInterval(myVar);
  }
}