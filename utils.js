"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDecision = getDecision;
exports.getHandValue = getHandValue;
exports.shuffleArray = shuffleArray;
exports.getBet = getBet;
exports.getStrHand = getStrHand;
const PromptSync = require("prompt-sync");
const prompt = PromptSync();
function getDecision() {
    // returns whether the player will hit or stand
    while (true) {
        const decision = prompt("Your action: (hit/stand): ").toLowerCase();
        if (decision === "stand" || decision === "hit")
            return decision;
    }
}
function getHandValue(cards) {
    let value = 0;
    let aces = 0;
    for (const card of cards) {
        if (card.value === 1) {
            aces++;
            continue;
        }
        value += Math.min(10, card.value);
    }
    if (aces === 0)
        return value;
    if (value < 11)
        return value + 11 + (aces - 1);
    else
        return value + aces;
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function getBet(balance) {
    // returns the bet the player is making
    while (true) {
        const bet = prompt("Enter your bet: ");
        try {
            const numBet = Number(bet);
            if (numBet > 0 && numBet <= balance)
                return numBet;
            console.log("Invalid bet.");
        }
        catch (error) {
            console.log(`Please enter a valid number.${error}`);
        }
    }
}
function getStrHand(hand, hideSecondCard = false) {
    // returns a string representation of the hand
    let str = "";
    for (const [index, card] of hand.entries()) {
        if (index !== 0)
            str += ", ";
        if (index === 1 && hideSecondCard) {
            str += "[hidden]";
            break;
        }
        str += `${card.getName()}` + card.suit;
    }
    return str;
}
