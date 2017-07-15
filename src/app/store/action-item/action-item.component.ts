import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-item',
  inputs: ['price', 'name', 'clickCounter'],
  templateUrl: './action-item.component.html',
  styleUrls: ['./action-item.component.css']
})
export class ActionItemComponent implements OnInit {
	public name: string; 
	public clickCounter: number = 0;
	public actionCount: number = 0;
	public price: number = 0;

  @Output() public onBuy: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {}
  
  click() {
    this.onBuy.next(this.name);
    this.actionCount++;
  }
}
