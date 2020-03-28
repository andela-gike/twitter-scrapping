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
    component.searchData = [{
      account: {fullname: "Nadeem Mirbahar", href: "/nadeemmirbahar", id: 181061991},
      date: "Mar 27, 2020",
      hashtags:["#StayHomeSaveLives", "#mercy"],
      likes: 6,
      replies: "-",
      retweets: "-",
      text: "#StayHomeSaveLives ↵Please show #mercy towards #hu..."
    }]
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component).toBeTruthy();
    });
  });


  it('should render tab', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('.table-header-row th').textContent).toContain('Tweet');
    });
  });
});
