import { Component, OnInit } from '@angular/core';
import { Price } from './models/Price';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'trading';
  prices: Price[] = [];

  constructor(private rest: RestService) {}

  ngOnInit() {
    this.rest.getAllPrices().then((prices) => (this.prices = prices));
  }

  updatePrice(price: Price) {
    const search = this.prices.find((p, k) => {
      if (p.id === price.id) {
        this.prices[k] = price;
        return true;
      }
      return false;
    });
    if (!search && price.id) {
      this.prices.push(price);
    }
  }
}
