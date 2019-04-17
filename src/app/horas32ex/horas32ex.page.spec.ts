import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Horas32exPage } from './horas32ex.page';

describe('Horas32exPage', () => {
  let component: Horas32exPage;
  let fixture: ComponentFixture<Horas32exPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Horas32exPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Horas32exPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
