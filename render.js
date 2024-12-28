export function createCard(card, container, onClickHandler) {
    const cardElem = document.createElement('div');
    cardElem.dataset.rank = card.rank;
    cardElem.dataset.suit = card.suit;

    const cardInnerElem = document.createElement('div');
    const cardFrontElem = document.createElement('div');
    const cardBackElem = document.createElement('div');

    const cardFrontImg = document.createElement('img');
    const cardBackImg = document.createElement('img');

    cardElem.classList.add('card');
    cardInnerElem.classList.add('card-inner');
    cardFrontElem.classList.add('card-front');
    cardBackElem.classList.add('card-back');

    cardFrontImg.src = card.imgPath;
    cardBackImg.src = '/images/cards/B.png';
    cardFrontImg.classList.add('card-img');
    cardBackImg.classList.add('card-img');

    cardFrontElem.appendChild(cardFrontImg);
    cardBackElem.appendChild(cardBackImg);

    cardInnerElem.appendChild(cardFrontElem);
    cardInnerElem.appendChild(cardBackElem);

    cardElem.appendChild(cardInnerElem);

    container.appendChild(cardElem);

    if (onClickHandler) {
        cardElem.addEventListener('click', () => onClickHandler(cardElem, card.suit));
    }
}