import { Component, OnInit } from '@angular/core';
import { prices } from './dataSources/prices';
import { Price } from './models/Price';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'trading';
  prices: Price[] = [];

  ngOnInit() {
    this.prices = prices;
  }
}
