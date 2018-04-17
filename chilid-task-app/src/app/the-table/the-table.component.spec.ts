import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule }      from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular2-datatable";
import {HttpModule} from '@angular/http';
import { SortingArrowsComponent } from '../sorting-arrows/sorting-arrows.component';
import { TheTableComponent }   from './the-table.component';

describe('TheTableComponent', () => {
  let component: TheTableComponent;
  let fixture: ComponentFixture<TheTableComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheTableComponent,SortingArrowsComponent],
      imports:      [
        CommonModule,
        DataTableModule,
        FormsModule,
        HttpModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should create', () => {
      expect(component).toBeTruthy();
  });
});
