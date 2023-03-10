import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  serverElements = [];
// {type:'server', name:'bubuuuuuur', content:'testullllll'}
  constructor() { }

  ngOnInit(): void {
  }

  onServerAdded(serData: {numele: string, continut: string}) {
    this.serverElements.push({
      type: 'server',
      numele: serData.numele,
      continut: serData.continut      
    });
    console.log('onServerAdded()',serData, this.serverElements)
  }

  onBlueprintAdded(blueData: {numele: string, continut: string}) {
    this.serverElements.push({
      type: 'blueprint',
      numele: blueData.numele,
      continut: blueData.continut
    });
  }

  onChangefirst(){
    console.log(this.serverElements[0].numele = 'changed');
  }

  sterge() {
    this.serverElements.splice(0, 1)
  }

  onIntervalFired(numarul: number) {
    console.log(numarul)
    if (numarul % 2 === 0){
      this.evenNumbers.push(numarul)
    } else {
      this.oddNumbers.push(numarul)
    }
}

}
