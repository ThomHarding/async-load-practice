export function renderCandyCard(candy) {
    const candyEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const veganEl = document.createElement('p');
    const parentEl = document.createElement('p');

    candyEl.classList.add('candy-item');
    candyEl.href = `./candies/?id=${candy.id}`; 
    nameEl.textContent = candy.name;
    veganEl.textContent = candy.vegan;
    parentEl.textContent = candy.parent_company;

    candyEl.append(nameEl, parentEl, veganEl);
    return candyEl;
}

export function renderMovieCard(movie) {
    const movieEl = document.createElement('div');
    const titleEl = document.createElement('p');
    const releaseEl = document.createElement('p');
    const ratingEl = document.createElement('p');

    movieEl.classList.add('movie-item');
    movieEl.href = `./candies/?id=${movie.id}`; 
    titleEl.textContent = movie.title;
    releaseEl.textContent = movie.release_date;
    ratingEl.textContent = movie.avg_rating;

    movieEl.append(titleEl, ratingEl, releaseEl);
    return movieEl;
}