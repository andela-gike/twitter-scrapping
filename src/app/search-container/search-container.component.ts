import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, throwError } from 'rxjs';
import {
  map, debounceTime, distinctUntilChanged, switchMap, catchError, mergeAll
} from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchInputComponent implements OnInit, OnChanges {
  constructor(private apiService: ApiService) { } // this creates and initializes the api service in this file

  searchParams: string;
  public loading: boolean;
  public searchName = new Subject<string>()
  public searchResult: any
  public paginateElement : any
  public errorMessage: any

  public searchForm = new FormGroup({
    search: new FormControl('', Validators.required)
  })

  private truncateString(tweetString: string, maxNumber: number) {
    return tweetString.length > maxNumber ?
      tweetString.slice(0, maxNumber) + "..." : tweetString;
  }

  public search() {
    this.searchName.pipe(
      map((evt: any) => {
        return evt.target.value
      }),
      debounceTime(500),
      distinctUntilChanged(), // every the user input the same search term  it will be passed down one preventing unneccessary api call
      // map(term => {
      //   this.loading = true;
      //   return this.apiService._searchTweet(term, this.searchType)
      // }),
      // mergeAll(), The problem of outgoing request to the api does not get resolved with this method
      // with the mergeAll function if during the time the user was typing he changes his mind as to what I want to search for the result
      // that will come back will be stale. switchAll operator resolves this by not just flattening our action by merging all the
      // result but we are switching to the last unfinished query in our flow
      switchMap(term => {
        this.loading = true; // instead of adding the is loading here the tap operator can be used to set loading to true as well
        return this.apiService._searchTweet(term, this.searchType)
      }),
      catchError((error) => {
        console.log(error)
        this.loading = false
        this.errorMessage = error.message
        return throwError(error)
      })
    )
      .subscribe(value => {
        this.loading = false;
        const formattedValue = value != null ? value.map((val) => {
          return {
            account: val.account,
            date: val.date,
            hashtags: val.hashtags.slice(0, 2),
            likes: val.likes == 0 ? '-' : val.likes,
            replies: val.replies == 0 ? '-' : val.replies,
            retweets: val.retweets == 0 ? '-' : val.retweets,
            text: this.truncateString(val.text, 50)
          }
        }) : value;
        this.searchResult = formattedValue
        this.paginateElement = this.searchResult
    })
  }
  ngOnInit(): void {
    this.search()
  }

  @Input() activeTab: string;
  placeHolder = '';
  searchType = ''
  getSelectedSearchType(typeName: string) {
    this.searchType = typeName;
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = changedProp.currentValue;
      this.placeHolder = `Search by ${to.split(' ')[0]}`;
      this.getSelectedSearchType(to.split(' ')[0]);
      this.searchResult = null;
    }
  }

  ngOnDestroy() {
    this.searchName.unsubscribe()
  }
}
