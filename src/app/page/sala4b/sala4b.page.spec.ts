import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sala4bPage } from './sala4b.page';

describe('Sala4bPage', () => {
  let component: Sala4bPage;
  let fixture: ComponentFixture<Sala4bPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sala4bPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sala4bPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
