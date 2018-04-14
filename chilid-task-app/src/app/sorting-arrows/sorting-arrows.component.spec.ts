import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingArrowsComponent } from './sorting-arrows.component';

describe('SortingArrowsComponent', () => {
  let component: SortingArrowsComponent;
  let fixture: ComponentFixture<SortingArrowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingArrowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingArrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
