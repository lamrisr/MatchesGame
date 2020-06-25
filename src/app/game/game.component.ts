import { Component, OnInit } from '@angular/core';

export enum TURNS {
  PLAYER,
  COMPUTER
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  turn : TURNS = TURNS.PLAYER;
  matchesCount : number;

  constructor() { }

  ngOnInit() {
    this.generateRandomMatchesNumber();
  }

  onChoiceDone(choice) {
    if(choice > 0 && choice < 4) {
      this.matchesCount -= choice;
    if(this.matchesCount > 0) this.giveHand();
    if(this.turn === TURNS.COMPUTER) this.makeAChoice();
    }
  }

  replay() {
    this.turn = TURNS.PLAYER;
    this.generateRandomMatchesNumber();
  }

  /**
   * Sets matchesCount to a random value between 7 and 15
   */
  private generateRandomMatchesNumber() {
    this.matchesCount = Math.floor(Math.random() * Math.floor(8)) + 7;
  }

  private giveHand() {
    if(this.turn === TURNS.PLAYER) this.turn = TURNS.COMPUTER;
    else if(this.turn === TURNS.COMPUTER) this.turn = TURNS.PLAYER;
  }

  private makeAChoice() {
    let modulo = this.matchesCount % 4;
    let matchesToPick = 0;
    if(modulo === 0) matchesToPick = 3;
    else if(modulo <= 3) matchesToPick = modulo;
    this.matchesCount -= matchesToPick;
    if(this.matchesCount > 0) this.giveHand();
  }

}
