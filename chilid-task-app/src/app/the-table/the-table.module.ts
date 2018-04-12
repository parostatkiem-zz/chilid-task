import { NgModule }      from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular2-datatable";
import {HttpModule} from '@angular/http';

import { TheTableComponent }   from './the-table.component';

@NgModule({
  imports:      [
    CommonModule,
    DataTableModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  declarations: [ TheTableComponent ],
  exports: [TheTableComponent]
})

export class TheTableModule { }
