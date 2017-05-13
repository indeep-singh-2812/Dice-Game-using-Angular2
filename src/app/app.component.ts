import { Component } from '@angular/core';
import {RollDiceService} from './roll-dice.service';
import {MessageComponent} from './message/message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RollDiceService]
})
export class AppComponent {
messageComponent : MessageComponent;
  title = 'Dice Game';
  result :string;
  constructor() { 
    this.messageComponent = new MessageComponent();
  }

  displayMessage(event){
    this.result = event;
  }
}
