import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  feedData$ = new BehaviorSubject<any>([]);
  constructor(private httpService: HttpService) {}

  changeFeedData(data: any) {
    this.feedData$.next(data);
  }

  getCurrentFeedData() {
    return this.feedData$.getValue();
  }

  updateFeedData(newFeed: any) {
    let data = [];
    data.push(newFeed);
    let currentFeedData = this.getCurrentFeedData();
    let newFeedUpdateData = data.concat(currentFeedData);
    this.changeFeedData(newFeedUpdateData);
  }


  deleteFeedData(msgIndex: number) {
    let data = [];
    let currentFeedData = this.getCurrentFeedData();
    currentFeedData.splice(msgIndex, 1);
    let newFeedUpdateData = data.concat(currentFeedData);
    this.changeFeedData(newFeedUpdateData);
  }

  feedData(postData: any): Observable<any> {
    return this.httpService.post('feed', postData);
  }

  feedDelete(postData: any): Observable<any> {
    return this.httpService.post('feedDelete', postData);
  }

  feedUpdate(postData: any): Observable<any> {
    return this.httpService.post('feedUpdate', postData);
  }
}
