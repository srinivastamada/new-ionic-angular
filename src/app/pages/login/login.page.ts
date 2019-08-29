import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { AuthConstants } from '../../config/auth-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
   postData = {
       username:'',
       password:''
   };
   error = false;
   errorMessage:string = '';

  constructor(private router: Router, private authService: AuthService, private storageService: StorageService) {}

  ngOnInit() {}

   validateInputs(){
    let username = this.postData.username.trim();
    let password = this.postData.password.trim();
    return this.postData.username && this.postData.password && username.length > 0 && password.length > 0;
  }

  loginAction() {
     if (this.validateInputs()) {
    console.log(this.postData);
      this.authService.login(this.postData).subscribe(
        (res: any) => {
          if (res.userData) {
            this.error = false;
            this.storageService.store(AuthConstants.AUTH, res.userData);
            this.router.navigate(['home/feed']);
          } else {
            this.error = true;
            this.errorMessage = "The email/username or password you entered is incorrect. You can try again or get some help logging in."
          }
        },
        (error: any) => {
          this.error = true;
          this.errorMessage = "The email/username or password you entered is incorrect. You can try again or get some help logging in"
        }
      );
    } else {
      this.error = true;
      this.errorMessage = "Please enter email/username or password."
    }
  }
}
