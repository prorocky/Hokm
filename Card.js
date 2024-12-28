class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
        this.imgPath = `/images/cards/${rank}${suit}.png`;
    }
}

export default Card;