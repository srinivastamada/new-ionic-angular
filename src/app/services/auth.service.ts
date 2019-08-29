import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpService,
    private storage: StorageService,
    private router: Router) { }

  isAuthenticated() {
    return true;
  }

   login(postData: any): Observable<any> {
    if (postData && postData.username && postData.password) {
      return this.httpService.post('login', postData);
    }
  }
}
