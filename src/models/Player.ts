import { Choices } from "./Choices";

export class Player {
  choice: Choices | null;

  constructor() {
    this.choice = null;
  }

  makeChoice(choice: Choices) {
    this.choice = choice;
  }
}