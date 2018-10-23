var generujButton = document.getElementById("generuj");
generujButton.onclick = tabliczka;

function tabliczka() {
  var tab = "<table";

  for (var i = 1; i <=6; i++){
    tab += "<tr>";
    
    for (j = 1; j <=6; j++){
      tab += '<td>' + i * j + " " + '</td>';
    }
    tab += "</tr>";
   }

tab += '</table>';
var wynik = document.getElementById('tab');
wynik.innerHTML = tab;
};

var font = document.getElementById("size");
var buttonZwieksz = document.getElementById("zwieksz");
var buttonZmniejsz = document.getElementById("zmniejsz");
var stop = document.getElementById('stop');
var tekst = document.getElementById("tekst");

buttonZwieksz.addEventListener('click',biggerSize);
buttonZmniejsz.onclick = smallerSize;
font.addEventListener('mouseover', colorGreen);
tekst.addEventListener('mouseover',autoFontSize);


function biggerSize() {
  font.setAttribute('class', "zwieksz");
}

function smallerSize () {
  font.setAttribute('class', "zmniejsz");
}

function colorGreen () {
  this.style.color = "green"
}

function autoFontSize () {
  var font = parseInt(window.getComputedStyle(this).fontSize); //przelicza na liczbe fontSize
  console.log(font);
  this.style.fontSize = (++font) + 'px';
  console.log(this.style.fontSize);
}

stop.addEventListener('click', function() {
  tekst.removeEventListener('mouseover',autoFontSize);
  console.log('usun kolor');
});