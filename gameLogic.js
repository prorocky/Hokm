export class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
        this.imgPath = "/images/cards/" + String(rank) + String(suit) + ".png"
    }
}
export class Deck {
    constructor() {
        this.suits = ["S", "H", "C", "D"];
        this.ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
        this.deck = [];
        this.initializeDeck();
    }
    
    initializeDeck() {
        this.deck = [];
        for (let suit of this.suits) {
            for (let rank of this.ranks) {
                this.deck.push(new Card(suit, rank));
            }
        }
    }

    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    // deal first 5 cards, have hakem select trump suit, then deal rest
    hakemInitialDeal() {
        return this.deck.splice(0, 5);
    }

    hakemSecondDeal() {
        return this.deck.splice(0, 8);
    }

    deal() {
        return this.deck.splice(0, 13);
    }

    reset() {
        this.initializeDeck();
        this.shuffle();
    }
}

export class Game {
    constructor() {
        this.hokm = null;
        this.deck = new Deck();
    }
    
    setHokm(suit) {
        this.hokm = suit;
    }

    getHokm() {
        return this.hokm;
    }
}