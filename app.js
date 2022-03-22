import { getAllCandies } from './fetch-utils.js';
import { renderCandyCard } from './render-utils.js';

const candiesEl = document.querySelector('.candies');

window.addEventListener('load', async () => {
    const candies = await getAllCandies();
    for (let candy of candies) {
        let candyEl = renderCandyCard(candy);
        candiesEl.append(candyEl);
    }
});