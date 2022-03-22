import { getAllCandies, getAllMovies } from './fetch-utils.js';
import { renderCandyCard, renderMovieCard } from './render-utils.js';

const candiesEl = document.querySelector('.candies');
const moviesEl = document.querySelector('.movies');

window.addEventListener('load', async () => {
    const candies = await getAllCandies();
    for (let candy of candies) {
        let candyEl = renderCandyCard(candy);
        candiesEl.append(candyEl);
    }
    const movies = await getAllMovies();
    for (let movie of movies) {
        let movieEl = renderMovieCard(movie);
        moviesEl.append(movieEl);
    }
});