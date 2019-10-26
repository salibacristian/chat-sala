import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sala4aPage } from './sala4a.page';

describe('Sala4aPage', () => {
  let component: Sala4aPage;
  let fixture: ComponentFixture<Sala4aPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sala4aPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sala4aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
