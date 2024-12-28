/*
    This file is for main game flow
    Turn management, rule enforcement, score tracking, game setup, etc


    At first, develop game for 2 players
    Eventually add options for 3 and 4 players
 */
import Deck from './Deck.js';
import Player from './Player.js';
import { createCard } from './render.js';

class Game {
    constructor() {
        this.deck = new Deck();
        this.players = [];
        this.currentTurn = 0;
        this.hokmSuit = null;
    }

    addPlayer(player) {
        this.players.push(player);
    }

    nextTurn() {
        this.currentTurn = (this.currentTurn + 1) % this.players.length;
    }

    startGame() {
        this.deck.shuffle();

        // Deal cards
        // FOR NOW, ASSUME 2 PLAYERS, IMPLEMENT RULES ACCORDINGLY
        this.players.forEach(player => {
            player.hand = this.deck.deal(5);
            player.hand.forEach(card => player.addCard(card));
        });


        // this.players.forEach(player => {
        //     player.hand = this.deck.deal(13);
        //     player.hand.forEach(card => player.addCard(card));
        // });

        // Allow the hokm selection by the first player
        this.selectHokm();
    }
    hokmListener(card) {
        if (Game.hokmSuit != null) return;
        Game.hokmSuit = card.dataset.suit;
        let hokm = '';
        switch (card.dataset.suit) {
            case "S":
                hokm = "Spade";
                break;
            case "H":
                hokm = "Heart";
                break;
            case "C":
                hokm = "Club";
                break;
            default:
                hokm = "Diamond";
                break;
            }
        alert(`Hokm is set to ${hokm}`);
    }

    selectHokm() {
        // change this to be random later
        const hakem = this.players[0];
        const firstFiveCards = hakem.hand.slice(0, 5);

        // const hokmListener = (event) => {
        //     if (this.hokmSuit != null) return;

        //     this.hokmSuit = event.target.dataset.suit;

        //     firstFiveCards.forEach(card => {
        //         card.removeEventListener('click', hokmListener);
        //     });

        //     this.startGamePhase();
        // };

        firstFiveCards.forEach(card => {
            createCard(card, hakem.cardContainer, this.hokmListener);
            const cardElem = hakem.cardContainer.querySelector(`[data-rank="${card.rank}"][data-suit="${card.suit}"]`);

            if (!cardElem) {
                console.error(`Card element for ${card.rank} of ${card.suit} not found.`);
                return; // Skip if card element doesn't exist
            }

            // cardElem.addEventListener('click', this.hokmListener);
        });
    }

    startGamePhase() {
        
    }
}

export default Game;


/*
import Player from './Player.js';

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
    deal5() {
        return this.deck.splice(0, 5);
    }

    deal4() {
        return this.deck.splice(0, 4);
    }

    reset() {
        this.initializeDeck();
        this.shuffle();
    }
}

class Game {
    constructor() {
        this.hokm = null;
        this.deck = new Deck();
        this.players = [];
        this.currentTurn = 0;
    }
    
    setHokm(suit) {
        this.hokm = suit;
    }

    getHokm() {
        return this.hokm;
    }

    addPlayer(player) {
        this.players.push(player);
    }

    nextTurn() {
        this.currentTurn = (this.currentTurn + 1) % this.players.length;
    }

    startGame() {
        this.deck.shuffle();
        // deal to hakem and decide on hokm
        let hakemIndex = Math.floor(Math.random() * this.players.length);
        this.players[hakemIndex]
    }
}
export default Game;
*/