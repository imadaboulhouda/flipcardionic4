import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMeComponent } from './card-me.component';

describe('CardMeComponent', () => {
  let component: CardMeComponent;
  let fixture: ComponentFixture<CardMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
