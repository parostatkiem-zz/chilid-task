import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataTableModule} from "angular2-datatable";
import { AppComponent } from './app.component';
import { TheTableComponent } from './the-table/the-table.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    TheTableComponent
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
