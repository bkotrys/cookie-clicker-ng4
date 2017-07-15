import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  inputs: ['clickCounter'],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public items = [
  	{ name: "cursor", limit: 10 },
  	{ name: "grandma", limit: 200 }
  ]		
  public clickCounter: number = 11;
  ngOnInit() {}

}
