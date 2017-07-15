import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ciastko',
  templateUrl: './ciastko.component.html',
  styleUrls: ['./ciastko.component.css']
})
export class CiastkoComponent implements OnInit {

  @Output() coockieClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onCookieClick(){
      this.coockieClicked.next({ clicked: true });
  }

}
