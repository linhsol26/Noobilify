import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { User } from '../interfaces/user.model';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user;
  userData;
  constructor(private afAuth: AngularFireAuth, private afStore: AngularFirestore, private router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user != null) {
        this.user = user;
        this.afStore.collection('users').doc(this.user.uid).get().subscribe(data => {
          this.userData = data.data();
          console.log(data);
          console.log(this.userData);
        })
      }
    }, err => {
      console.log(err.message);
    });
  }

  // async logOut() {
  //   await this.afAuth.auth.signOut();
  //   return this.router.navigate(['/']);
  // }

  async logOut() {
    await this.afAuth.auth.signOut().then(() => {
      console.log('Sign out success');
    }).catch(() => {
      console.log('Sign out fail');
    })
    this.user = null;
    this.userData = null;
    this.router.navigate(['/']);
  }

  // public updateUserData({ uid, email, displayName, photoURL, playlistID }: User) {
  //   const userRef: AngularFirestoreDocument<User> = this.afStore.doc(`users/${uid}`);
  //   const data = {
  //     uid,
  //     email,
  //     displayName,
  //     photoURL,
  //     playlistID,
  //   };
  //   return userRef.set(data, { merge: true });
  // }

  // async loginWithGG() {
  //   const provider = new auth.GoogleAuthProvider();
  //   const credetial = await this.afAuth.auth.signInWithPopup(provider);
  //   console.log(credetial);
  //   return this.updateUserData(credetial.user)
  //     .then(() =>
  //       console.log('login successfully')
  //     )
  //     .catch(err => console.log(err));
  // }

  async loginWithGG() {
    await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider).then(User => {
      if (User.additionalUserInfo.isNewUser) {
        this.afStore.collection('users').doc(User.user.uid).set({
          uid: User.user.uid,
          email: User.user.email,
          displayName: User.user.displayName,
          photoUrl: User.user.photoURL,
          playlistID: []
        })
      }
    }).catch(error => {
      console.log(error);
    });
  }
}
