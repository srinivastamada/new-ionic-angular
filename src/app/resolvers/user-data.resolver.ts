import { Injectable } from "@angular/core";
import { AuthService } from '../services/auth.service';

@Injectable()
export class UserDataResolver {
    constructor(private authService: AuthService) {

    }

    resolve(){
        return this.authService.getUserData();
    }
}