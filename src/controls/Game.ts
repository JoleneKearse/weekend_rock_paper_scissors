import { Choices } from "../models/Choices";
import { Player } from "../models/Player";

export class Game {
  player: Player;
  computer: Player;
  choices: Choices[];

  constructor(player: Player, computer: Player, choices: Choices[]) {
    this.player = player;
    this.computer = computer;
    this.choices = choices;
  }

  play(playerChoice: Choices) {
    this.player.makeChoice(playerChoice);
    const computerChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
    this.computer.makeChoice(computerChoice);
  }

  
}