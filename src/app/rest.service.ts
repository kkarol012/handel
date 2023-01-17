import { Injectable } from '@angular/core';
import { prices } from './dataSources/prices';
import { Price } from './models/Price';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor() {}

  async getAllPrices(): Promise<Price[]> {
    await new Promise((_) => setTimeout(_, 1000));
    return prices;
  }

  async getLatestPrice(instrumentId: string): Promise<Price | false> {
    await new Promise((_) => setTimeout(_, 1000));
    return prices.find((p) => p.id === instrumentId) ?? false;
  }

  translatePrice(priceFromBackend: any): Price {
    // we add some abstraction layer because we aren't sure about names of fields in price. If names are different here add code for parse
    return priceFromBackend;
  }

  sleep(time: number) {
    setTimeout(() => {}, time);
  }
}
