function wipescreen() {
  const listName = document.querySelector("#movieList");
  listName.innerHTML = "";
}

function ToDom() {
  movies.forEach(function (movie) {
    let a = document.createElement("a");
    let img = document.createElement("img");
    a.href = "http://www.imdb.com/title/" + movie.imdbID;
    img.src = movie.Poster;
    const listName = document.getElementById("movieList");
    listName.appendChild(a);
    a.appendChild(img);
  });
}

ToDom();

function newToDom() {
  const filter1 = movies.filter((name) => parseInt(name.Year) >= 2014);

  filter1.forEach(function (movie) {
    let a = document.createElement("a");
    let img = document.createElement("img");
    a.href = "http://www.imdb.com/title/" + movie.imdbID;
    img.src = movie.Poster;
    const listName = document.getElementById("movieList");
    listName.appendChild(a);
    a.appendChild(img);
  });
}

function avengersToDom() {
  const filter2 = movies.filter((name) => name.Title.includes("Avengers"));

  filter2.forEach(function (movie) {
    let a = document.createElement("a");
    let img = document.createElement("img");
    a.href = "http://www.imdb.com/title/" + movie.imdbID;
    img.src = movie.Poster;
    const listName = document.getElementById("movieList");
    listName.appendChild(a);
    a.appendChild(img);
  });
}

function xmenToDom() {
  const filter3 = movies.filter((name) => name.Title.includes("X-Men"));

  filter3.forEach(function (movie) {
    let a = document.createElement("a");
    let img = document.createElement("img");
    a.href = "http://www.imdb.com/title/" + movie.imdbID;
    img.src = movie.Poster;
    const listName = document.getElementById("movieList");
    listName.appendChild(a);
    a.appendChild(img);
  });
}

function prinsessToDom() {
  const filter4 = movies.filter((name) => name.Title.includes("Princess"));

  filter4.forEach(function (movie) {
    let a = document.createElement("a");
    let img = document.createElement("img");
    a.href = "http://www.imdb.com/title/" + movie.imdbID;
    img.src = movie.Poster;
    const listName = document.getElementById("movieList");
    listName.appendChild(a);
    a.appendChild(img);
  });
}

function batmanToDom() {
  const filter5 = movies.filter((name) => name.Title.includes("Batman"));

  filter5.forEach(function (movie) {
    let a = document.createElement("a");
    let img = document.createElement("img");
    a.href = "http://www.imdb.com/title/" + movie.imdbID;
    img.src = movie.Poster;
    const listName = document.getElementById("movieList");
    listName.appendChild(a);
    a.appendChild(img);
  });
}

function addEventListeners() {
  document.querySelectorAll('#btn_filter [name="filter-button"]');
  let nieuw = document.querySelector("#btn_filter #nieuw");
  let avengers = document.querySelector("#btn_filter #avengers");
  let xmen = document.querySelector("#btn_filter #xmen");
  let princess = document.querySelector("#btn_filter #princess");
  let batman = document.querySelector("#btn_filter #batman");

  nieuw.addEventListener("change", function () {
    console.log("newest films selected");
    wipescreen();
    newToDom();
  });

  avengers.addEventListener("change", function () {
    console.log("avengers films selected");
    wipescreen();
    avengersToDom();
  });

  xmen.addEventListener("change", function () {
    console.log("xmen films selected");
    wipescreen();
    xmenToDom();
  });

  princess.addEventListener("change", function () {
    console.log("princess films selected");
    wipescreen();
    prinsessToDom();
  });

  batman.addEventListener("change", function () {
    console.log("batman films selected");
    wipescreen();
    batmanToDom();
  });
}

addEventListeners();
