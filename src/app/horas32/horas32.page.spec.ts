import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Horas32Page } from './horas32.page';

describe('Horas32Page', () => {
  let component: Horas32Page;
  let fixture: ComponentFixture<Horas32Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Horas32Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Horas32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
