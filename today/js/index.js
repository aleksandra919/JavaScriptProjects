let info = document.getElementById('info');
let info2 = document.getElementById('info2');
let event = document.getElementById('event');

let today = new Date();
let eventDay = new Date("05/11/2018");


Date.prototype.getMonthPL = function() 
{
  let months = [ "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
              "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad",
              "Grudzień"];
  
  return months[this.getMonth()];
};

Date.prototype.getDayPL = function() 
{
  let days = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek",
           "Sobota", "Niedziela"];
  
  return days[this.getDay()-1];
};

info.innerHTML = 'Dzień: ' + today.getDate() + '<br>' + 
                 'Dzień tygodnia: ' + today.getDayPL() + '<br>' + 
                 'Miesiąc: ' + today.getMonthPL() + '<br>' + 
                 'Rok: ' + today.getFullYear() + '<br>' +
                 'Godzina: ' + today.toLocaleTimeString() ; 

info2.innerHTML = today.toLocaleTimeString() + '<br>' + today.toLocaleDateString() + '<br>' + today.toLocaleString();
                            
function timeRemain(from, to) {

  return  Math.round(((from - to)/1000/60/60/24)) +" days " + 
          Math.round(((from - to)/1000/60/60)) + " hours " + 
          Math.round(((from - to)/1000/60)) + " minutes ";
}

event.innerHTML += timeRemain(eventDay, today);