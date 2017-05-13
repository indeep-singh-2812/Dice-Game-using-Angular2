import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {RollDiceService} from './../roll-dice.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  value1: string = 'X';
  value2: string = 'X';

 @Output() result: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _rollDiceService: RollDiceService) { }

  ngOnInit() {
    this.result.emit("Please click the button to PLAY..");
  }

  onButtonClick(): void{
    this.value1 = this._rollDiceService.getNumber().toString();
    this.value2 = this._rollDiceService.getNumber().toString();
    this.getResult();

  }

  getResult(): void{
  let sum : number = parseInt(this.value1) + parseInt(this.value2);
    if( sum == 6 || sum %2 == 1){
      this.result.emit("You LOOSE!!!. Please try again.");
    } else {
      this.result.emit("You WIN!!!... Press button again to play.");
    }
  }

}
