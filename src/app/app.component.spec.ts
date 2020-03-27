import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'twitter-scrapping'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('twitter-scrapping');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.toolbar span').textContent).toContain('Angular Twitter');
  });

  it('should render tab', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.item-title a').textContent).toContain('Hashtag search');
  });

  it('should render change between active tab on click', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const aEl = fixture.debugElement.queryAll(By.css('a'))
    aEl[1].nativeElement.click();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.selected-search p')).nativeElement.textContent).toContain('User search');
  });
});
