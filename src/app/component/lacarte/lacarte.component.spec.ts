import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LacarteComponent } from './lacarte.component';

describe('LacarteComponent', () => {
  let component: LacarteComponent;
  let fixture: ComponentFixture<LacarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LacarteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LacarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
