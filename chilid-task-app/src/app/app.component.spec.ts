import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TheTableComponent } from './the-table/the-table.component';
import {DataTableModule} from "angular2-datatable";
import { HttpModule } from '@angular/http';
import { ChilidHeaderComponent } from './chilid-header/chilid-header.component';
import { ChilidLogoComponent } from './chilid-logo/chilid-logo.component';
import { SortingArrowsComponent } from './sorting-arrows/sorting-arrows.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TheTableComponent,
        ChilidHeaderComponent,
        ChilidLogoComponent,
        SortingArrowsComponent

      ],
      imports: [
        DataTableModule,
        HttpModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Chilid test app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Chilid test app');
  }));
});
