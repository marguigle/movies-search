document.getElementById("searchButton").addEventListener("click", searchMovies);

let api_key = "74a3c5cbcbc613f1ab8f62a3d068ddea";
urlBase = "https://api.themoviedb.org/3/search/movie";
let urlImage = "http://image.tmdb.org/t/p/w200";

function searchMovies() {
  let searchInput = document.getElementById("searchInput").value;
  fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
    .then((response) => response.json())
    .then((response) => displayMovies(response.results));
}
function displayMovies(movies) {
  let resultContainer = document.getElementById("results");
  resultContainer.innerHTML = "";
  if (movies.length === 0) {
    resultContainer.innerHTML = "<p>No se han encontrado resultados </>";
    return;
  }
  movies.forEach((movie) => {
    let movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");
    let title = document.createElement("h2");
    title.innerText = movie.original_title;
    let releaseDate = document.createElement("p");
    releaseDate.innerText = "fecha de lanzamiento: " + movie.release_date;
    let overview = document.createElement("p");
    overview.innerText = "description: " + movie.overview;
    let posterPath = urlImage + movie.poster_path;
    let poster = document.createElement("img");
    poster.src = posterPath;
    movieDiv.appendChild(poster);
    movieDiv.appendChild(title);
    movieDiv.appendChild(releaseDate);
    movieDiv.appendChild(overview);
    resultContainer.appendChild(movieDiv);
    console.log(movie);
  });
}
