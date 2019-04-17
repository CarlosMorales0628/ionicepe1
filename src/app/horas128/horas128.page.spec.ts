import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Horas128Page } from './horas128.page';

describe('Horas128Page', () => {
  let component: Horas128Page;
  let fixture: ComponentFixture<Horas128Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Horas128Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Horas128Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
