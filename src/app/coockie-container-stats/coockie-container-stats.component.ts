import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coockie-container-stats',
  templateUrl: './coockie-container-stats.component.html',
  styleUrls: ['./coockie-container-stats.component.css']
})
export class CoockieContainerStatsComponent implements OnInit {

  @Input() cookieCount: number;

  constructor() { }

  ngOnInit() {
  
  }

  

}
