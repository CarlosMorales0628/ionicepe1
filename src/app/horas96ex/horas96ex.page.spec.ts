import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Horas96exPage } from './horas96ex.page';

describe('Horas96exPage', () => {
  let component: Horas96exPage;
  let fixture: ComponentFixture<Horas96exPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Horas96exPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Horas96exPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
