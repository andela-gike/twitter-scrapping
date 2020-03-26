import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { DisplayTableComponent } from './display-table.component';

describe('DisplayTableComponent', () => {
  let component: DisplayTableComponent;
  let fixture: ComponentFixture<DisplayTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxPaginationModule
      ],
      declarations: [ DisplayTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render tab', () => {
    const fixture = TestBed.createComponent(DisplayTableComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.table-header-row th').textContent).toContain('Tweet');
  });
});
