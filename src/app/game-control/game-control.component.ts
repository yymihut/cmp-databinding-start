import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
 @Output() intervalFired = new EventEmitter<number> ();
  interval;
  lastnumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval( ()=> {
      this.intervalFired.emit(this.lastnumber + 1 );
      this.lastnumber++
    },1000 )
  }

  onPauseGame(){
    clearInterval(this.interval);
  }



}
