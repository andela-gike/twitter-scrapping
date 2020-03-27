import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { SearchInputComponent } from './search-container.component';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchInputComponent],
      imports: [ HttpClientTestingModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the search container', () => {
    expect(component).toBeTruthy();
  });

  it('should render search message container', () => {
    const fixture = TestBed.createComponent(SearchInputComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.message-container h2')
      .textContent).toContain('Kindly type in the word you would like to search for in the input field above');
  });

  it('should render input field with placeholder', () => {
    const fixture = TestBed.createComponent(SearchInputComponent);
    fixture.detectChanges();
    let inputEl = fixture.debugElement.query(By.css('input'))!.nativeElement;
    fixture.componentInstance.placeHolder = 'Other placeholder';
    fixture.detectChanges();
    expect(inputEl.placeholder).toContain('Other placeholder');
  });

  it('should has input value', () => {
    fixture.detectChanges();
    const inputEl = fixture.debugElement.query(By.css('input'));
    console.log(inputEl.nativeElement.value, 'test');
    const value = 'trigger input event';
    inputEl.nativeElement.value = value;
    inputEl.triggerEventHandler('input', { target: inputEl.nativeElement });
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(inputEl.nativeElement.value).toContain(value);
    })
  });
});
