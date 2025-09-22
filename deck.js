"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = __importDefault(require("./card"));
const types_1 = require("./types");
const utils_1 = require("./utils");
class Deck {
    constructor() {
        this.deck = [];
        this.reset();
    }
    reset() {
        const cards = [];
        const suits = [types_1.Suit.Clubs, types_1.Suit.Diamonds, types_1.Suit.Hearts, types_1.Suit.Spades];
        for (let i = 0; i < 4; i++) {
            for (let j = 1; j <= 13; j++) {
                const card = new card_1.default(j, suits[i]);
                cards.push(card);
            }
        }
        this.deck = (0, utils_1.shuffleArray)(cards);
    }
    deal(num) {
        const dealtCards = [];
        for (let i = 1; i <= num; i++) {
            let card = this.deck.pop();
            dealtCards.push(card);
        }
        return dealtCards;
    }
}
exports.default = Deck;
