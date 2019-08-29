import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private siteKey = 'mango';

  constructor() { }

  getStorageType(){
      return localStorage;
  }

  generateKey(key: string) {
    return this.siteKey + '-' + key;
  }


  store(key: string, value: any){
      const encryptedValue = btoa(escape(JSON.stringify(value)));
      this.getStorageType().setItem(this.generateKey(key), encryptedValue)
  }

  get(key: string){
      const encryptedValue = this.getStorageType().getItem(this.generateKey(key));
      let value: any;
      if(encryptedValue){
          value = JSON.parse(unescape(atob(encryptedValue)));
      }
      return value
  }

  clear(){
      this.getStorageType().clear();
  }


}
