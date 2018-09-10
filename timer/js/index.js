let stoperBox = document.getElementById('stoperBox');

stoperBox.onclick = countDown;

function countDown() {
  let timeToCountdown = Number(prompt('Provide time in min. ') * 60);
  
  let interval = setInterval(function() {
    console.log(timeToCountdown);
    stoperBox.innerHTML = timeToCountdown + " second";
    timeToCountdown--;
     if(timeToCountdown < -1) {
      clearInterval(interval);
       stoperBox.innerHTML = "START";
    };
  }, 1000);
};