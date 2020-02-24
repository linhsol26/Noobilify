import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  PlayListArray = [{
    id: 'abc',
    title: "TEST1",
    link: `/playlist/abc`
  },
  {
    id: 'abz',
    title: "TEST2",
    link: `/playlist/abz`,
  },
  {
    id: 'cbz',
    title: "TEST3",
    link: `/playlist/cbz`
  }];

  constructor(private auth: AuthService, private afStore: AngularFirestore) {
    
  }

  fetch() {
    return this.PlayListArray;
  }

  addPlayListToUser(name) {
    this.PlayListArray.push(name);
  }

  getPlayList(id) {
    return of(this.PlayListArray.filter(obj => {
      obj.id === id;
    }))
  }

  updatePlayList() {
    return new Observable()
  }
}
