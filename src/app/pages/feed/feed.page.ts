import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss']
})
export class FeedPage implements OnInit {
  public authUser: any;
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.userData$.subscribe((res:any) => {
     this.authUser = res;
    });
  }
}
