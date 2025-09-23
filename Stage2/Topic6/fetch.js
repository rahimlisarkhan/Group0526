
const movieTitleInput = document.getElementById("movieTitle")
const fetchMovieButton = document.getElementById("fetchMovieButton")
const loadingEl = document.getElementById("loading")


function getMovieData(title){

const apiKey = "5addd3ac"
const url =`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`

const myPromise = fetch(url)
// console.log("myPromise",myPromise);
   loadingEl.style.display = "block";

    myPromise.then((response) => {
        // console.log("Response received:",response);
        return response.json();
    }).then((data) => {
        console.log("Data received:",data);

        renderData(data);
    }).catch((error) => {
        console.log(error);
        alert("An error occurred while fetching movie data.");
        // handleError(error);
    }).finally(() => {
        loadingEl.style.display = "none";
    });

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