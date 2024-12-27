/*
 *  Author: Oran Shadian
 *
 *  Card Game Hokm
 * 
 *  
 * 
 * 
 */

const cardBackImgPath = '/images/cards/B.png'

cardContainerElem = document.querySelector('.card-container')

class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
        this.imgPath = "/images/cards/" + String(rank) + String(suit) + ".png"
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

    deal() {
        return this.deck.splice(0, 13);
    }

    reset() {
        this.initializeDeck();
        this.shuffle();
    }
}

// Call this function when you want to add cards to your hand/make them visible
function createCard(cardItem, container) {
    const cardElem = createElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    // const cardBackElem = createElement('div')

    const cardFrontImg = createElement('img')
    // const cardBackImg = createElement('img')

    addClassToElement(cardElem, 'card')

    // add class to inner card element
    addClassToElement(cardInnerElem, 'card-inner')

    // add class to front card element
    addClassToElement(cardFrontElem, 'card-front')

    // add class to back card element
    // addClassToElement(cardBackElem, 'card-back')

    // add src attribute and approppriate value to img element (back of card)
    // addSrcToImageElem(cardBackImg, cardBackImgPath)

    // add src attribute and appropriate value to img element (front of card)
    addSrcToImageElem(cardFrontImg, cardItem.imgPath)

    // assign class to front image element
    addClassToElement(cardFrontImg, 'card-img')

    // assign class to back image element
    // addClassToElement(cardBackImg, 'card-img')

    // add front image element as child element to front card element
    addChildElement(cardFrontElem, cardFrontImg)

    // add back image element as child element to back card element
    // addChildElement(cardBackElem, cardBackImg)

    // add front card element as child element to inner card element
    addChildElement(cardInnerElem, cardFrontElem)

    // add back card element as child element to inner card element
    // addChildElement(cardInnerElem, cardBackElem)

    // add inner card element as child element to card element
    addChildElement(cardElem, cardInnerElem)

    // add card to card container
    addChildElement(container, cardElem)

}

function createElement(elemType) {
    return document.createElement(elemType)
}

function addClassToElement(elem, className) {
    elem.classList.add(className)
}

function addSrcToImageElem(imgElem, src) {
    imgElem.src = src
}

function addChildElement(parentElem, childElem) {
    parentElem.appendChild(childElem)
}
// cardContainerElem

// let cardCount = 13;
// const cardContainer = document.getElementById('cardContainer');

// function updateGridLayout() {
//     const columns = Math.max(cardCount, 1);
//     cardContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
// }

// function loseCard() {
//     if (cardCount > 0) {
//         cardCount--;
//         const lastCard = cardContainer.lastElementChild;
//         cardContainer.removeChild(lastCard);

//         updateGridLayout();
//     }
// }

// updateGridLayout();
let cardCount = 13;
const myDeck = new Deck();
myDeck.shuffle();
let myHand = myDeck.deal();
myHand.forEach(card => createCard(card, cardContainerElem));