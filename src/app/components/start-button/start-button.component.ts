import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-button',
  templateUrl: './start-button.component.html',
  styleUrls: ['./start-button.component.scss']
})
export class StartButtonComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
