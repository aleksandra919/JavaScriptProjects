let colorText = document.getElementById('colorText');
let colorBtn = document.getElementsByClassName('colorBtn');
for(var i=0; i<colorBtn.length; i++) {
  colorBtn[i].addEventListener("click", 
    function (){
      setColor(this);
    }
  );
}

function setColor(e) {
  let attr = e.getAttribute("data-color");
  colorText.style.color = attr; 
};

colorText.onmousemove = function tooltip(e) {
  let tooltip = document.getElementById('tooltip');
  tooltip.style.display = 'block';
  tooltip.style.left = e.clientX + 10 + 'px';
  tooltip.style.top = e.clientY - 60 + 'px';
}

let toTopButton = document.getElementById('toTopButton');

window.onscroll = function() {

  if (window.pageYOffset > 300){
    toTopButton.style.display = "block";
  }
  else {
    toTopButton.style.display = "none";
  }
};
  
toTopButton.onclick= function() {
  window.scrollBy(0, -1*window.pageYOffset); 
};



// function setColorBlue() {
//    change_color.style.color = 'blue';
// };