import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilidLogoComponent } from './chilid-logo.component';

describe('ChilidLogoComponent', () => {
  let component: ChilidLogoComponent;
  let fixture: ComponentFixture<ChilidLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChilidLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilidLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
