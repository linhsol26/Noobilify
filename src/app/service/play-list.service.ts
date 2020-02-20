import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PlayListService {
  PlayListArray= [{
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
  }
];

  constructor() { }

  fetch() {
    return this.PlayListArray;
  }

  addPlayListToUser(name){
    this.PlayListArray.push(name);
  }

  getPlayList(id) {
    return of(this.PlayListArray.filter(obj => {
      obj.id === id;
    }))
  }
}
