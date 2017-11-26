import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('active') active: boolean
  @Input('img') img: string
  @Input('title') title: string
  @Input('amount') amount: string
  constructor() { }

  ngOnInit() {
  }

}
