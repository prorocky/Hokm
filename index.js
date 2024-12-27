/*
 *  Author: Oran Shadian
 *
 *  Card Game Hokm
 * 
 *  
 * 
 * 
 */
class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
}
class Deck {
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
                this.deck.push(Card(suit, rank));
            }
        }
    }

    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], thjis.deck[i]];
        }
    }

    // deal()

    reset() {
        this.initializeDeck();
        this.shuffle();
    }
    

}
