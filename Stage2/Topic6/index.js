
const movieTitleInput = document.getElementById("movieTitle")
const fetchMovieButton = document.getElementById("fetchMovieButton")
const loadingEl = document.getElementById("loading")


async function getMovieData(title){
   try{
    const apiKey = "5addd3ac"
    const url =`http://www.omdbapi.comm/?apikey=${apiKey}&t=${title}`
    loadingEl.style.display = "block";

    const response = await fetch(url)

    const data = await response.json()

    console.log("data", data);
    renderData(data)
    }catch(err){
     console.log(err);
     alert("An error occurred while fetching movie data.");
    //  window.location.href = "/404"
   }finally{
     loadingEl.style.display = "none";
   }

}


// getMovieData("o olmasin bu olsun")

function renderData(data){

    const titleEl = document.querySelector(".movie-title")
    const genreEl = document.querySelector(".movie-genre")
    const ratingEl = document.querySelector(".movie-rating")
    const yearEl = document.querySelector(".movie-year")
    const posterEl = document.querySelector(".movie-poster")
    const descriptionEl = document.querySelector(".movie-description")

    titleEl.textContent = data.Title
    genreEl.textContent = `Genre: ${data.Genre}`
    yearEl.textContent = `Release Year: ${data.Year}`
    ratingEl.textContent = `Rating: ${data.imdbRating}/10`
    descriptionEl.textContent = data.Plot
    posterEl.src = data.Poster


}


fetchMovieButton.addEventListener("click", function(){
    const title = movieTitleInput.value;
     getMovieData(title)

     movieTitleInput.value = ""
  
});