import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SimpleChange } from '@angular/core';
import { TestScheduler } from 'rxjs/testing'
import { Subject, of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { SearchInputComponent } from './search-container.component';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;
  let searchName = new Subject<string>();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchInputComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {provide: SearchInputComponent, searchName: { searchName }}
      ],
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

  it('should render `Search by link ` in input field', () => {
    component.activeTab = 'Link Search';
    //directly call ngOnChanges
    component.ngOnChanges({
      activeTab: new SimpleChange(null, component.activeTab, true)
    });
    fixture.detectChanges();
    let inputEl = fixture.debugElement.query(By.css('input'))!.nativeElement;
    expect(inputEl.placeholder).toBe('Search by Link');
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
    const value = 'trigger input event';
    inputEl.nativeElement.value = value;
    inputEl.triggerEventHandler('input', { target: inputEl.nativeElement });
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(inputEl.nativeElement.value).toContain(value);
    })
  });

  // it('should emit value after keyup and debounce time', fakeAsync(() => {
  //   fixture.detectChanges();
  //   // const componentMock: SearchInputComponent = jasmine.createSpyObj('SearchInputComponent', ['search'])
  //   // componentMock.searchName;
  //   // fixture.detectChanges();
  // //  console.log(new Subject<string>('truu'))
  // //   const spy = TestBed.get(SearchInputComponent);
  // //   spy.searchName = of('kilo')
  //   spyOn(SearchInputComponent, 'search').and.returnValue(false)
  //   console.log(component.searchName)
  //   const input = fixture.debugElement.query(By.css('input'));
  //   input.nativeElement.value = 'Q';
  //   input.nativeElement.dispatchEvent(
  //     new KeyboardEvent('keyup', { bubbles: true, cancelable: true, key: 'Q', shiftKey: true }),
  //   );
  //   tick(500);
  //   fixture.detectChanges();
  //   expect(component.search()).toHaveBeenCalled();
  // }));
});
