import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';
import { AuthService } from './../../services/auth.service';
import { ToastService } from './../../services/toast.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss']
})
export class FeedPage implements OnInit {
  public authUser: any;

  postData = {
    user_id: '',
    token: ''
  };
  constructor(
    private auth: AuthService,
    private feedSerive: FeedService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      this.feedData();
    });
  }

  feedData() {
    console.log(this.authUser);
    this.postData.user_id = this.authUser.user_id;
    this.postData.token = this.authUser.token;
    if (this.postData.user_id && this.postData.token) {
      this.feedSerive.feedData(this.postData).subscribe(
        (res: any) => {
          this.feedSerive.changeFeedData(res.feedData);
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    }
  }
}
