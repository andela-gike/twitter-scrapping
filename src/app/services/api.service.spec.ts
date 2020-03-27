import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs'
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  let injector: TestBed
  let httpClientSpy: { get: jasmine.Spy };
  let jasmineService : ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    })
    service = TestBed.inject(ApiService);
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    jasmineService = new ApiService(<any> httpClientSpy);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected tweets (HttpClient called once)', () => {
    const dummyTweets = [{
      count: 1,
      offset: 0,
      results: [
        {
          account: {
            fullname: "Daddy_Tsume",
            href: "/DTsume",
            id: 1088557170977853441
          },
          date: "2020-03-23T17:28:00+07:00",
          hashtags: [],
          likes: 1423,
          replies: 0,
          retweets: 86,
          text: "Thats the thing, America has a hero complex,"
        }]
    }];

    httpClientSpy.get.and.returnValue(of(dummyTweets));
    jasmineService.getTweetData('mercy', 'users').subscribe(
      value => { console.log(value, 'help')}
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
