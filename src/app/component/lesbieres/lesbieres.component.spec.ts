import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesbieresComponent } from './lesbieres.component';
import { HttpClientModule } from '@angular/common/http';

describe('LesbieresComponent', () => {
  let component: LesbieresComponent;
  let fixture: ComponentFixture<LesbieresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesbieresComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LesbieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
