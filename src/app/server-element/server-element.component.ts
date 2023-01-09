import { Component, Input, OnInit, OnChanges, SimpleChanges, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit, OnChanges, OnDestroy {
  @Input('srvElement') element: { type: string; numele: string; continut: string };

  

  constructor() {
    // console.log('const log')
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(schimbari: SimpleChanges) {
    console.log('const log', schimbari)
  }

  

  ngOnDestroy() {
    //in parent comp, avem o metoda care sterge 
  }
}
