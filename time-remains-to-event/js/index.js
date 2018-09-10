window.onload = function() 
{
  function timeInterval() {
    setInterval(
      function (){
        let event = document.getElementById('event');
        let today = new Date();
        let eventDay = new Date("05/11/2018");

        event.innerHTML = timeRemain(eventDay, today);
      },1000
    );
  };

  timeInterval();

  function timeRemain(from, to) {

    return  Math.round(((from - to)/1000/60/60/24)) +" days " + 
            Math.round(((from - to)/1000/60/60)) + " hours " + 
            Math.round(((from - to)/1000/60)) + " minutes " +
            Math.round(((from - to)/1000)) + " seconds!";
  }
};