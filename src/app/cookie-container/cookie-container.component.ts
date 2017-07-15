import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ClickService}  from '../services/click.service';

@Component({
  selector: 'app-cookie-container',
  templateUrl: './cookie-container.component.html',
  styleUrls: ['./cookie-container.component.css']
})
export class CookieContainerComponent implements OnInit {

  coockieCounter: number;
  

  constructor(private _cliskService: ClickService) { 
      this.subscribeToClickService();
  }

  ngOnInit() {
      
  }

  subscribeToClickService(){
      this._cliskService.ClickedNumber.subscribe((res) => {
          this.coockieCounter = res;
      })
  }

  sentCookieClickedEvent(event: object){
      this._cliskService.registerClick();
  }

}
