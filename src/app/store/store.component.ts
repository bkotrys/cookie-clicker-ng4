import { Component, OnInit, Inject } from '@angular/core';
import { ClickService } from '../services/click.service';

@Component({
  selector: 'app-store',
  inputs: ['clickCounter'],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public items = [
  	{ name: "cursor", price: 10 },
  	{ name: "grandma", price: 30 },
  	{ name: "farm", price: 60 },
  	{ name: "mine", price: 100 }
  ]
  
  private canBuyNewClicker: boolean = false;
  private clickCounter: number = 0;

  constructor(@Inject(ClickService) private service: ClickService ) {

  }

  ngOnInit() {
    this.service.CanBuyNewClicker.subscribe((can) => {
    	this.canBuyNewClicker = can;
    });
    this.service.ClickedNumber.subscribe(counter => {
    	this.clickCounter = counter;
    });
  }

  buy($event) {
    if(this.canBuyNewClicker) {
      const price = this.items.find(i => i.name === $event).price;
      this.service.buyFor(price);
    }
  }
}
