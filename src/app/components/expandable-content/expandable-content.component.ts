import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-expandable-content',
  templateUrl: './expandable-content.component.html',
  styleUrls: ['./expandable-content.component.scss'],
})
export class ExpandableContentComponent implements OnInit {

  @Input()
  public title: string;

  public symbol: string;
  public showText: boolean;

  constructor() {
    this.showText = true;
    this.symbol = '+';
  }

  ngOnInit() {}

  public toggle() {
    this.showText = !this.showText;
    this.symbol = this.showText ? '+' : '-';
  }

}
