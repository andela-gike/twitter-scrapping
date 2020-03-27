import { Injectable } from '@angular/core';
import {
  HttpClient, HttpHeaders, HttpErrorResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
/**
 *  This class is the api service created to get tweet from the external
 *  api url
 */
export class ApiService {

  public headers: HttpHeaders = new
    HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
    .append('Access-Control-Allow-Origin', '*')
    .append('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');

  constructor(private http: HttpClient) { }
  // The application was having some cors error, since access the backend
  // allowed I used an external api to resolve the error
  public corsResolveUrl = 'https://cors-anywhere.herokuapp.com/'
  public baseUrl: string = 'https://anymind-recruitment-python-backend.adasia.biz/';
  public searchResult: any;

  /**
   * Make HTTP call to get tweets by hashtags
   */
  getTweetData(hashTagName: string, searchType: string): Observable<any> {
    let urlSecondPart = searchType === 'Hashtag' ? 'hashtags' : 'users'
    const hashtagsUrl =
      `${this.corsResolveUrl}${this.baseUrl}${urlSecondPart}/${hashTagName}?offset=0`
    if (hashTagName === '') {
      return of(null)
    } else {
      return this.http.get(hashtagsUrl, { headers: this.headers }).pipe(
        map(response => {
          console.log(response['results'])
          return this.searchResult = response['results']
        })
      )
    }
  }

  // return the tweet search response
  public _searchTweet(searchName: string, searchType: string) {
    return this.getTweetData(searchName, searchType);
  }
}
