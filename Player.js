import { createCard } from './render.js';
class Player {
    constructor(name, isBot = false) {
        this.name = name;
        this.isBot = isBot;
        this.hand = [];
        this.cardContainer = this.createCardContainer();
        // this.cardContainer = document.querySelector(`#${name}-card-container`); // Assuming each player has their own container
    }

    createCardContainer() {
        if (!this.isBot) {
            return document.querySelector('.card-container');
        }
        const container = document.createElement('div');
        container.classList.add('card-container');
        container.setAttribute('data-player', this.name);
        document.body.appendChild(container);
        return container;
    }

    addCard(card) {
        this.hand.push(card);
    }

    renderCard(card) {
        createCard(card, this.cardContainer);
    }

    playCard(card) {
        const cardIndex = this.hand.indexOf(card);
        if (cardIndex > -1) {
            this.hand.splice(cardIndex, 1);
            this.cardContainer.querySelector(`[data-rank="${card.rank}"][data-suit="${card.suit}"]`).remove();
        }
        return card;
    }

}

export default Player;