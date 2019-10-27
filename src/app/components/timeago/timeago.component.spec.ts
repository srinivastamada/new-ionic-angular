import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeagoComponent } from './timeago.component';

describe('TimeagoComponent', () => {
  let component: TimeagoComponent;
  let fixture: ComponentFixture<TimeagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeagoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
