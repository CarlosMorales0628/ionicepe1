import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Horas96Page } from './horas96.page';

describe('Horas96Page', () => {
  let component: Horas96Page;
  let fixture: ComponentFixture<Horas96Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Horas96Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Horas96Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
