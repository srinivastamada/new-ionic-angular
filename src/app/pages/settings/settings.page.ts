import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  logoutAction() {
    this.authService.logout();
  }
}
