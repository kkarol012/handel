import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Price } from '../models/Price';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-price-fetcher',
  templateUrl: './fetcher.component.html',
  styleUrls: ['./fetcher.component.css'],
})
export class FetcherComponent implements OnDestroy {
  @Input()
  public set time(value: number) {
    this._time = value;
    this.setIntervalIfCan();
  }
  @Input()
  public set currency(value: string) {
    this._currency = value;
    this.setIntervalIfCan();
  }

  @Output() updatePrice = new EventEmitter<Price>();

  private _time: number = 0;
  private _currency: string = '';

  interval = null;

  constructor(private rest: RestService) {}

  setIntervalIfCan() {
    if (this._currency.length === 0 || this._time < 1) {
      return;
    }

    if (this.interval) {
      clearTimeout(this.interval);
    }
    setTimeout(() => {
      this.rest
        .getLatestPrice(this._currency)
        .then((price) => {
          if (price) {
            this.updatePrice.emit(price);
          }
        })
        .then(() => this.setIntervalIfCan());
    }, this._time);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearTimeout(this.interval);
    }
  }
}
