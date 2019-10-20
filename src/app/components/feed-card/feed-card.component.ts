import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from './../../services/alert.service';
import { FeedService } from './../../services/feed.service';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss']
})
export class FeedCardComponent implements OnInit {
  @Input() loginUser: any;
  feedData: any;
  postData = {
    user_id: '',
    token: '',
    feed_id: ''
  };

  constructor(
    private feedSerivce: FeedService,
    private alertSerivce: AlertService
  ) {}

  ngOnInit() {
    this.feedSerivce.feedData$.subscribe((res: any) => {
      this.feedData = res;
    });
  }

  feedDeleteAction(msgIndex: number, feed_id: any) {
    this.postData.user_id = this.loginUser.user_id;
    this.postData.token = this.loginUser.token;
    this.postData.feed_id = feed_id;
    this.alertSerivce
      .presentAlertConfirm('Delete feed', 'Do you want to delete this feed?')
      .then((res: any) => {
        if (res.role === 'okay') {
          this.feedSerivce.feedDelete(this.postData).subscribe((res: any) => {
            if (res.success) {
              this.feedSerivce.deleteFeedData(msgIndex);
            }
          });
        }
      });
  }
}
