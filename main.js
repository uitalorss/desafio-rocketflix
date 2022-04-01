import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";

function getMovie(){
  const idMovie = Math.floor(Math.random() * 10000 + 1)
  
  axios.get(console.log(`${BASE_URL}${idMovie}?${API_KEY}&${language}`))
}

getMovie();