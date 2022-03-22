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