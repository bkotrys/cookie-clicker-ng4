import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ClickService}  from '../services/click.service';

@Component({
  selector: 'app-cookie-container',
  templateUrl: './cookie-container.component.html',
  styleUrls: ['./cookie-container.component.css']
})
export class CookieContainerComponent implements OnInit {

  constructor(private _cliskService: ClickService) { }

  ngOnInit() {
      
  }

  sentCookieClickedEvent(event: object){
    debugger;
      this._cliskService.registerClick();
  }

}
