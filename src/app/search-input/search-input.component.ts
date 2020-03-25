import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, throwError } from 'rxjs';
import {
  map, debounceTime, distinctUntilChanged, switchMap, catchError
} from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  searchParams: string;
  inputPlaceHolder = 'Search by Hashtag';
  public loading: boolean;
  public hashtagName = new Subject<string>()
  public hashTagSearchResult: any
  public errorMessage: any

  public searchForm = new FormGroup({
    search: new FormControl('', Validators.required)
  })

  public search() {
    this.hashtagName.pipe(
      map((evt: any) => {
        console.log(evt.target.value)
        return evt.target.value
      }),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(term => {
        this.loading = true;
        return this.apiService._searchTweetByHashtag(term)
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
        this.hashTagSearchResult = value
    })
  }
  ngOnInit(): void {
    this.search()
  }

}
