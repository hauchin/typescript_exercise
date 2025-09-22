import { ICard } from "./types";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

export function getDecision(): "hit" | "stand" {
  // returns whether the player will hit or stand
  while (true) {
    const decision = prompt("Your action: (hit/stand): ").toLowerCase();
    if (decision === "stand" || decision === "hit") return decision;
  }
}

export function getHandValue(cards: ICard[]): number {
  let value = 0;
  let aces = 0;
  for (const card of cards) {
    if (card.value === 1) {
      aces++;
      continue;
    }
    value += Math.min(10, card.value);
  }

  if (aces === 0) return value;
  if (value < 11) return value + 11 + (aces - 1);
  else return value + aces;
}

export function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function getBet(balance: number): number {
  // returns the bet the player is making
  while (true) {
    const bet = prompt("Enter your bet: ");
    try {
      const numBet = Number(bet);
      if (numBet > 0 && numBet <= balance) return numBet;
      console.log("Invalid bet.");
    } catch (error) {
      console.log(`Please enter a valid number.${error}`);
    }
  }
}

export function getStrHand(
  hand: ICard[],
  hideSecondCard: boolean = false
): string {
  // returns a string representation of the hand
  let str = "";
  for (const [index, card] of hand.entries()) {
    if (index !== 0) str += ", ";
    if (index === 1 && hideSecondCard) {
      str += "[hidden]";
      break;
    }
    str += `${card.getName()}` + card.suit;
  }
  return str;
}
