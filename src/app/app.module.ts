import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PriceTableComponent } from './price-table/price-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FetcherComponent } from './fetcher/fetcher.component';

@NgModule({
  declarations: [AppComponent, PriceTableComponent, FetcherComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
