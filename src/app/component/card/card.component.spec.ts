import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have defined and string type type', () => {
    component.type = 'TestType';
    const isString = typeof component.type === 'string';
    expect(component.type).toBeDefined();
    expect(isString).toBeTruthy();
  });

  it('should have defined and string type pay', () => {
    component.pay = 'TestPay';
    const isString = typeof component.pay === 'string';
    expect(component.pay).toBeDefined();
    expect(isString).toBeTruthy();
  });

  it('should have defined and string type photo', () => {
    component.photo = 'TestPhoto';
    const isString = typeof component.photo === 'string';
    expect(component.photo).toBeDefined();
    expect(isString).toBeTruthy();
  });

  it('should have defined and string type brasserie', () => {
    component.brasserie = 'TestBrasserie';
    const isString = typeof component.brasserie === 'string';
    expect(component.brasserie).toBeDefined();
    expect(isString).toBeTruthy();
  });
});



