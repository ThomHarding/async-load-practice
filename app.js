import { getAllCandies, getAllMovies, getAllSongs } from './fetch-utils.js';
import { renderCandyCard, renderMovieCard, renderSongCard } from './render-utils.js';

const candiesEl = document.querySelector('.candies');
const moviesEl = document.querySelector('.movies');
const songsEl = document.querySelector('.songs');

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
    const songs = await getAllSongs();
    for (let song of songs) {
        let songEl = renderSongCard(song);
        songsEl.append(songEl);
    }
});