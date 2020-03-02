import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MusicData } from '../models/music-data.model';
import { FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CloudService {
  index = -1;
  currentFile: any = {};
  files: Array<any> = [];

  name = new FormControl('', [
    Validators.required,
    Validators.maxLength(100),
    Validators.minLength(2)
  ]);
  singer = new FormControl('', [
    Validators.required,
    Validators.maxLength(100),
    Validators.minLength(2)
  ]);
  artist = new FormControl('', [
    Validators.required,
    Validators.maxLength(100),
    Validators.minLength(2)
  ]);

  constructor(private db: AngularFirestore) {}

  getMusicData() {
    return this.db.collection('files').snapshotChanges();
  }

  getLikedSongData(user) {
    if (user) {
      return this.db
        .doc(`users/${user.uid}`)
        .collection('likedsong')
        .snapshotChanges();
    }
  }

  getAllPlaylist(user) {
    if (user) {
      return this.db
        .doc(`users/${user.uid}`)
        .collection('playlist')
        .snapshotChanges();
    }
  }

  updateLikedSongData(user, file) {
    const userRef = this.db.firestore
      .doc(`users/${user.uid}`)
      .collection('likedsong');
    return userRef.add(file);
  }

  updateMusicData({
    name,
    artist,
    singer,
    musicURL,
    musicPath,
    imgURL,
    imgPath
  }: MusicData) {
    const dataRef = this.db.collection('files');
    const data = {
      name,
      singer,
      artist,
      musicURL,
      musicPath,
      imgURL,
      imgPath
    };
    return dataRef.add(data);
  }

  deleteLikeSongData(user, id) {
    const userRef = this.db
      .doc(`users/${user.uid}`)
      .collection('likedsong')
      .doc(id);
    return userRef.delete();
  }

  addPlayList() {}

  getPlaylist(user, id) {
    if (user) {
      return this.db
        .doc(`users/${user.uid}`)
        .collection('playlist')
        .snapshotChanges();
    }
  }
}
