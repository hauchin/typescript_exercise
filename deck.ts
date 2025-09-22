import Card from "./card";
import { IDealable, Suit } from "./types";
import { shuffleArray } from "./utils";

class Deck implements IDealable {
  private deck: Card[] = [];

  constructor() {
    this.reset();
  }

  reset() {
    const cards: Card[] = [];
    const suits = [Suit.Clubs, Suit.Diamonds, Suit.Hearts, Suit.Spades];
    for (let i = 0; i < 4; i++) {
      for (let j = 1; j <= 13; j++) {
        const card = new Card(j, suits[i]);
        cards.push(card);
      }
    }

    this.deck = shuffleArray(cards);
  }

  deal(num: number): Card[] {
    const dealtCards: Card[] = [];
    for (let i = 1; i <= num; i++) {
      let card = this.deck.pop();
      dealtCards.push(card!);
    }

    return dealtCards;
  }
}

export default Deck;
