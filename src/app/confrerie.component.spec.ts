import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfrerieComponent } from './confrerie.component';

describe('ConfrerieComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ConfrerieComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ConfrerieComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'confrerie'`, () => {
    const fixture = TestBed.createComponent(ConfrerieComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('confrerie');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ConfrerieComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('confrerie app is running!');
  });
});
