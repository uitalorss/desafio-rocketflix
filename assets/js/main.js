import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";
const searchMovie = document.querySelector(".searchMovie");

function getMovie(){
  const idMovie = Math.floor(Math.random() * 10000 + 1)
  
  axios.get(`${BASE_URL}${idMovie}?${API_KEY}&${language}`)
  .then(function(response) {
    const dataMovie = response.data;
    const posterMovie = response.data.poster_path;
    showMovie(dataMovie, posterMovie)
  })
  .catch(function(){
    const movieContent = document.querySelector('.movieContent');
    movieContent.style.gridTemplateColumns = '1fr';
    movieContent.innerHTML = `
    <p>Esse título não foi encontrado. Por favor, tente novamente. :(</p>
    `
  })
}

searchMovie.addEventListener("click", getMovie)

function showMovie(movie, poster){
  const movieContent = document.querySelector('.movieContent');
  const titleMovie = movie.title;
  const sinopsysMovie = movie.overview;
  const genres = movie.genres;
  const popularity = movie.popularity;
  movieContent.style.gridTemplateColumns = '1fr 1fr';


  movieContent.innerHTML = `
    <img src="${IMG_URL}${poster}" />
    <div>
      <h3>${titleMovie}</h3>
      <p>${sinopsysMovie}</p>
      
      <h4>Gêneros</h4>
      <ul>
        ${genres.map(genre => {
          return `<li>${genre.name}</li>`
        })}
      </ul>

      <h4>Popularidade</h4>
      <strong>${popularity}</strong>
    </div>
  `
}