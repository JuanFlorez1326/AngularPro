import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.nativeElement as HTMLElement;
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it("should be 3", () => {
    const num1 = 1;
    const num2 = 2;
    const result = num1 + num2;
    expect(result).toBe(3);
  });

  it(`should have the 'zoneless-calculator' title`, () => {
    expect(app.title).toEqual('zoneless-calculator');
  });

  it('should render router outlet', () => {
    expect(compiled.querySelector('router-outlet')).not.toBeNull();
  });

  it('should contain the "Buy me a beer"', () => {
    const a = compiled.querySelector('a');
    expect(a?.title).toBe('Buy me a beer');
    expect(a?.getAttribute('href')).toBe('https://www.buymeacoffee.com/scottwindon');
  });
});
