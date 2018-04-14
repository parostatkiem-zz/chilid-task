import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilidHeaderComponent } from './chilid-header.component';

describe('ChilidHeaderComponent', () => {
  let component: ChilidHeaderComponent;
  let fixture: ComponentFixture<ChilidHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChilidHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilidHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
