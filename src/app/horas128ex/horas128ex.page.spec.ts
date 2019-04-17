import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Horas128exPage } from './horas128ex.page';

describe('Horas128exPage', () => {
  let component: Horas128exPage;
  let fixture: ComponentFixture<Horas128exPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Horas128exPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Horas128exPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
