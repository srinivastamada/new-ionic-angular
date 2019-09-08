import { AuthConstants } from './../config/auth-constants';
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class StorageService {
<<<<<<< HEAD

  constructor() { }

  // JSON "set" example
async setObject() {
  await Storage.set({
    key: 'user',
    value: JSON.stringify({
      id: 1,
      name: 'Max'
    })
  });
}
=======
  constructor() {}

  // Store the value
  async store(storageKey: string, value: any) {
    const encryptedValue = btoa(escape(JSON.stringify(value)));
    await Storage.set({
      key: storageKey,
      value: encryptedValue
    });
  }

  // Get the value
  async get(storageKey: string) {
    const ret = await Storage.get({ key: storageKey });
    if(ret.value){
      return JSON.parse(unescape(atob(ret.value)));
    } else {
      return false;
    }
  }
>>>>>>> bb9de9217536036534369921c695a6fb1680e156

// JSON "get" example
async getObject() {
  const ret = await Storage.get({ key: 'user' });
  const user = JSON.parse(ret.value);
}

<<<<<<< HEAD
async setItem() {
  await Storage.set({
    key: 'name',
    value: 'Max'
  });
}

async getItem() {
  const value = await Storage.get({ key: 'name' });
  console.log('Got item: ', value);
}

async removeItem() {
  await Storage.remove({ key: 'name' });
}

async keys() {
  const keys = await Storage.keys();
  console.log('Got keys: ', keys);
}

async clear() {
  await Storage.clear();
}
=======
  async removeStorageItem(storageKey: string) {
    await Storage.remove({ key: storageKey });
  }

 
  // Clear storage
  async clear() {
    await Storage.clear();
  }
>>>>>>> bb9de9217536036534369921c695a6fb1680e156
}
