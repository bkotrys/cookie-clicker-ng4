import { Component, OnInit, Inject } from '@angular/core';
import { ClickService } from '../services/click.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public items = [
  	{ name: "cursor" },
  	{ name: "grandma" }
  ]
  
  private canBuyNewClicker: boolean = false;

  constructor(@Inject(ClickService) private service: ClickService ) {
    this.service.CanBuyNewClicker.subscribe((can) => {
      this.canBuyNewClicker = can;
    });
  }

  ngOnInit() {
  }

  buyCursor() {
    if(this.canBuyNewClicker) {
      this.service.buyClicker();
    }    
  }

}
