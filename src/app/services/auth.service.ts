import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthConstants } from '../config/auth-constants';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router
  ) {}

  isAuthenticated() {
    // let valueStatus = false;
    // const authStorage = this.storageService
    //   .get(AuthConstants.AUTH)
    //   .then(value => {
    //     if (value) {
         
    //       valueStatus = true;
    //     }
    //     console.log(value);
    //     return valueStatus;
    //   });
    return true;
  }

  login(postData: any): Observable<any> {
    return this.httpService.post('login', postData);
  }

  signup(postData: any): Observable<any> {
    return this.httpService.post('signup', postData);
  }

  logout() {
    this.storageService.clear();
    this.router.navigate(['login']);
  }
}
