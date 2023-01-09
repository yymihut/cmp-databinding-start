import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output('svCreated') serverCreated = new EventEmitter<{      //am creeat 2 eventuri care trimit info in componenta de sus, info from child to parent
    numele: string;
    continut: string;
  }>();

  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    numele: string;
    continut: string;
  }>();

  newServerName = '';
  newServerContent = '';
  
  @ViewChild('serverName') serverContentInput: ElementRef;

  
  constructor() {}

  ngOnInit(): void {}

// varianta cu referinta direct in html template
//   onAddServer(numeS: HTMLInputElement, continutS: HTMLInputElement) {
//     this.serverCreated.emit({
//       numele: numeS.value,
//       continut: continutS.value,
//     });
// // punem .value in metoda sau punem .value in html template la referinta campului, ex mai jos

// //dezavantajul fara 2-way binding [(ngModel)]="newServerName" , este ca nu se mai pot sterge inputurile
//   }

//   onAddBlueprint(numeBS, continutBS) {
//     this.blueprintCreated.emit({
//       numele: numeBS,
//       continut: continutBS,
//     });
  
//   }

// varianta cu this si 2-way binding
  onAddServer() {
  this.serverCreated.emit({
      numele: this.serverContentInput.nativeElement.value,
      continut: this.newServerContent,
    });
    this.serverContentInput.nativeElement.value = '';
    this.newServerContent = '';

// mai jos situatia cu 2-way binding si [(ngModel)]="newServerName"
    // this.serverCreated.emit({
    //   numele: this.newServerName,
    //   continut: this.newServerContent,
    // });
    // this.newServerName = '';
    // this.newServerContent = '';
    
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      numele: this.serverContentInput.nativeElement.value,
      continut: this.newServerContent,
    });
    this.serverContentInput.nativeElement.value = '';
    this.newServerContent = '';

// mai jos situatia cu 2-way binding si [(ngModel)]="newServerName"
    // this.blueprintCreated.emit({
    //   numele: this.newServerName,
    //   continut: this.newServerContent,
    // });
    // this.newServerName = '';    
    // this.newServerContent = '';
  }

}
