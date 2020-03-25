import { Injectable } from '@angular/core';
import {
  HttpClient, HttpHeaders, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  public baseUrl: string = 'https://cors-anywhere.herokuapp.com/https://anymind-recruitment-python-backend.adasia.biz/';
  public hashTagSearchResult: any;
  public userSearchResult: any;

  /**
   * Make HTTP call to get tweets by hashtags
   */
  getTweetByHashTagsData(hashTagName: string): Observable<any> {
    const hashtagsUrl = `${this.baseUrl}/hashtags/${hashTagName}?offset=0`
    if (hashTagName === '') {
      console.log('Not defined');
    } else {
      // let promise = new Promise((resolve, reject) => {
      //   this.http.get(hashtagsUrl, httpOptions)
      //   .toPromise()
      //   .then(
      //     res => { // Success
      //       console.log(res);
      //       resolve();
      //     }
      //   );
      // });
      // console.log(promise)
      return this.http.get(hashtagsUrl, httpOptions).pipe(
        map(response => {
          console.log(response)
          this.hashTagSearchResult = response['results']
        })
      )
    }
  }

  /**
   * Make HTTP call to get tweets by hashtags
   */
  getTweetByUserData(userName: string): Observable<any> {
    const usersUrl = `${this.baseUrl}/users/${userName}?offset=0`
    return this.http.get(usersUrl);
  }

  // return the hashtag search response
  public _searchTweetByHashtag(hashTagName: string) {
    return this.getTweetByHashTagsData(hashTagName);
  }
}
