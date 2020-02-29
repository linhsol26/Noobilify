import { Component, OnInit } from '@angular/core';
import { CloudService } from 'src/app/services/cloud.service';
import { AuthService } from 'src/app/services/auth.service';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-liked-song',
  templateUrl: './liked-song.component.html',
  styleUrls: ['./liked-song.component.scss']
})
export class LikedSongComponent implements OnInit {

  likedSongFile: Array<any> = [];
  user: any;

  constructor(
    protected cloudService: CloudService,
    protected authService: AuthService,
    protected audioService: AudioService
  ) {
    this.authService.user$.subscribe(userData => {
      this.user = userData;
      if (this.user) {
        this.cloudService.getLikedSongData(this.user).subscribe(data => {
          this.likedSongFile = data.map(e => e.payload.doc.data());
        });
      }
    });
  }

  ngOnInit() {
  }

  playStream(url) {
    this.audioService.playStream(url).subscribe(events => {
      // listening for fun here
    });
  }

  openFile(file, index) {
    this.cloudService.files.unshift(file);
    index = index + 1;
    this.cloudService.currentFile = { index, file };
  }

  playLikedSongPlaylist() {
    if (this.user) {
      this.likedSongFile.forEach(file => {
        this.openFile(file, this.cloudService.index);
      });
      this.playStream(this.cloudService.files[0].musicURL);
    }
  }

}
