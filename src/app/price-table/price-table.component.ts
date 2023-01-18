import { Component, Input } from '@angular/core';
import { Price } from '../models/Price';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.css'],
})
export class PriceTableComponent {
  @Input() prices: Price[] = [];
  displayedColumns = ['instrumentName', 'bidPrice', 'askPrice', 'timestamp'];
}
