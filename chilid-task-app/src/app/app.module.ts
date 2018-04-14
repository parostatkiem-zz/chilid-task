import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataTableModule} from "angular2-datatable";
import { AppComponent } from './app.component';
import { TheTableComponent } from './the-table/the-table.component';
import { HttpModule } from '@angular/http';
import { ChilidHeaderComponent } from './chilid-header/chilid-header.component';
import { ChilidLogoComponent } from './chilid-logo/chilid-logo.component';
import { SortingArrowsComponent } from './sorting-arrows/sorting-arrows.component';


@NgModule({
  declarations: [
    AppComponent,
    TheTableComponent,
    ChilidHeaderComponent,
    ChilidLogoComponent,
    SortingArrowsComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,TheTableComponent]
})
export class AppModule { }
