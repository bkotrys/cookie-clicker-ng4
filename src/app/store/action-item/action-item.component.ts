import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-item',
  inputs: ['limit', 'name', 'clickCounter'],
  templateUrl: './action-item.component.html',
  styleUrls: ['./action-item.component.css']
})
export class ActionItemComponent implements OnInit {
	public limit: number = 0;
	public name: string; 
	public clickCounter: number;
	ngOnInit() {}
}
