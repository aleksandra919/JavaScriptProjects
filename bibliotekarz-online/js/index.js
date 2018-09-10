var books = [
	{
		title: 'Harry Potter 1',
		year: 1999,
		author: 'J.K. Rowling'
	},
	{
		title: 'Harry Potter 2',
		year: 2001,
		author: 'J.K. Rowling'
	},
	{
		title: 'Harry Potter 3',
		year: 2003,
		author: 'J.K. Rowling'
	},
	{
		title: 'Harry Potter 4',
		year: 2005,
		author: 'J.K. Rowling'
	},
	{
		title: 'Harry Potter 5',
		year: 2007,
		author: 'J.K. Rowling'
	},
	{
		title: 'Harry Potter 6',
		year: 2009,
		author: 'J.K. Rowling'
	},
	{
		title: 'Harry Potter 7',
		year: 2011,
		author: 'J.K. Rowling'
	},
	{
		title: 'Under the dome',
		year: 2005,
		author: 'Stephen King'
	},
	{
		title: 'It',
		year: 2015,
		author: 'Stephen King'
	},
	{
		title: 'Thinking in Java',
		year: 1998,
		author: 'Bruce Eckel'
	}
];


function displayHTML(x,el) {
  return x.innerHTML += '<br>' + 'Title: '+ el.title + '<br>' + "Year: " +
                        el.year + '<br>' + 'Author: ' +  el.author +'<br>';
}

//ZADANIE 1
var task1 = document.getElementById("task1");

function findByYear(y){
  books.forEach(function(el) {
    if (el.year === y)
      {
        displayHTML(task1,el)
      };
    });
};
findByYear(2005);
findByYear(1992);
findByYear(2007);

//ZADANIE 2
var task2 = document.getElementById("task2");

function findBetweenYear(x, y){
  books.forEach(function(el) {
    if (el.year >= x && el.year <= y)
    {
      displayHTML(task2,el)
    }
  });
}
findBetweenYear(2011,2015);

//ZADANIE 3
var task3 = document.getElementById("task3");

function findByAutor(author1, author2, author3){
  books.forEach(function(el) {
      if ((el.author.indexOf(author1) != -1) || 
          (el.author.indexOf(author2) != -1) || 
          (el.author.indexOf(author3) != -1))
            {
               displayHTML(task3,el)
            };
  });
};             
findByAutor('Eckel', 'Brown', 'King');

// ZADANIE 4
var subbmitBtn = document.getElementById("task4Btn");
var task4 = document.getElementById("task4");

subbmitBtn.addEventListener('click', addNewBook)

function addNewBook () {
  var title = document.getElementById("title").value;
  var year = document.getElementById("year").value;
  var author = document.getElementById("author").value;

  let newBook = {
     title: title,
     year: year,
     author: author
  }
  var newArray = books;
  newArray.push(newBook);
};

// ZADANIE 5
var task5 = document.getElementById("task5");
var searchBtn = document.getElementById("task5Btn");

searchBtn.addEventListener('click', searchForTitle);

function searchForTitle(){
  task5.innerHTML = "";
  var search = document.getElementById("searchTitle").value;
  var searchUpper = search.toUpperCase();
  
  books.forEach(function(el){
    var title = el.title;
    var titleUpper = title.toUpperCase();
    if (titleUpper.indexOf(searchUpper) != -1) 
      {
        displayHTML(task5,el);
      };
  });
}

//Zadanie 7 
var deleteBtn = document.getElementById("task7Btn");
deleteBtn.addEventListener('click', deleteBook)

function deleteBook () {

 var newArray2 = books.slice();

 for(var i=newArray2.length-1; i>=0; i--){

  if(newArray2[i].author == document.getElementById("deleteAuthor").value ||
     newArray2[i].year == document.getElementById("deleteYear").value ||
     newArray2[i].title == document.getElementById("deleteTitle").value)
  {
    newArray2.splice(i,1);
  }
 };
};


// ZADANIE 8
var task8 = document.getElementById("task8");
document.getElementById('sortYear').addEventListener('click', function() {
                                                     displaySortHtml(arrSortYear, task8)} );
document.getElementById('sortAuthor').addEventListener('click', function() {
                                                     displaySortHtml(arrSortAuthor, task8)} );
document.getElementById('sortTitle').addEventListener('click', function() {
                                                     displaySortHtml(arrSortTitle, task8)} );

function sortByYear(a, b) {
  if(a.year < b.year)
    return -1;
  if(a.year > b.year)
    return 1;
  return 0;
};
var arrSortYear = [];
arrSortYear = books.slice();
arrSortYear.sort(sortByYear);


function sortByAuthor(a, b) {
  var authorA = a.author;
  var authorB = b.author;
  
  var splitA = authorA.split(" ");
  var splitB = authorB.split(" ");

  var lastA = splitA[splitA.length - 1];
  var lastB = splitB[splitB.length - 1];
  
  if(lastA < lastB) return -1;
  if(lastA > lastB) return 1;
  return 0;
}
var arrSortAuthor = [];
arrSortAuthor = books.slice();
arrSortAuthor.sort(sortByAuthor);


function sortByTitle(a, b) {
  var titleA = a.title;
  var titleB = b.title;
  if(titleA.toUpperCase() < titleB.toUpperCase())
    return -1;
  if(titleA.toUpperCase() > titleB.toUpperCase())
    return 1;
  return 0;
}
var arrSortTitle = [];
arrSortTitle = books.slice();
arrSortTitle.sort(sortByTitle);

function displaySortHtml(arr, x) {
   x.innerHTML = "";
   var text = "";
    arr.forEach(function(el){
        text += '<br>' + 'Title: '+ el.title + '<br>' + "Year: " +
          el.year + '<br>' + 'Author: ' +  el.author +'<br>';
      return x.innerHTML = text;
    });
};