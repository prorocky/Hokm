/*
 *  Author: Oran Shadian
 *
 *  Card Game Hokm
 * 
 *  
 * 
 * 
 */
import { Deck, Game } from './gameLogic.js';

// DOM elements
const cardBackImgPath = '/images/cards/B.png'
const cardContainerElem = document.querySelector('.card-container')

// utility functions
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

// Call this function when you want to add cards to your hand/make them visible
function createCard(cardItem, container, onClickHandler) {
    const cardElem = createElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    const cardFrontImg = createElement('img')
    const cardBackElem = createElement('div')
    const cardBackImg = createElement('img')

    addClassToElement(cardElem, 'card')

    // add class to inner card element
    addClassToElement(cardInnerElem, 'card-inner')

    // add class to front card element
    addClassToElement(cardFrontElem, 'card-front')

    // add class to back card element
    addClassToElement(cardBackElem, 'card-back')

    // add src attribute and approppriate value to img element (back of card)
    addSrcToImageElem(cardBackImg, cardBackImgPath)

    // add src attribute and appropriate value to img element (front of card)
    addSrcToImageElem(cardFrontImg, cardItem.imgPath)

    // assign class to front image element
    addClassToElement(cardFrontImg, 'card-img')

    // assign class to back image element
    addClassToElement(cardBackImg, 'card-img')

    // add front image element as child element to front card element
    addChildElement(cardFrontElem, cardFrontImg)

    // add back image element as child element to back card element
    addChildElement(cardBackElem, cardBackImg)

    // add front card element as child element to inner card element
    addChildElement(cardInnerElem, cardFrontElem)

    // add back card element as child element to inner card element
    addChildElement(cardInnerElem, cardBackElem)

    // add inner card element as child element to card element
    addChildElement(cardElem, cardInnerElem)

    // add card to card container
    addChildElement(container, cardElem)

    cardElem.addEventListener('click', () => onClickHandler(cardElem, cardItem.suit));
}

// Deal cards to Hakem in order to pick hokm
let _Game = new Game();
let deck = _Game.deck;
deck.shuffle();
let hokmSelected = false;
let P1_hand = deck.hakemInitialDeal();

function handleHokmSelection(cardElem, suit) {
    if (!hokmSelected) {
        _Game.setHokm(suit);
        let hokm = '';
        switch (suit) {
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
        hokmSelected = true;
        // Deal remaining cards (8)
        let remainingCards = deck.hakemSecondDeal();
        remainingCards.forEach(card => createCard(card, cardContainerElem, handleHokmSelection));
    } else {
        // eventually change this to "playing" the card
        cardElem.remove();
    }
   

    
}

P1_hand.forEach(card => createCard(card, cardContainerElem, handleHokmSelection));