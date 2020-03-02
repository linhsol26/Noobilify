import { Component, OnInit, Input } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';
import { CloudService } from 'src/app/services/cloud.service';
import { AuthService } from 'src/app/services/auth.service';
import { async } from '@angular/core/testing';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  @Input() file;
  likedSongFile: Array<any> = [];
  likedSongId: Array<any> = [];
  user: any;

  items = [
    { title: 'Add to Playlist-1' },
    { title: 'Add to Playlist-2' },
  ];
  nbMenuService: any;

  constructor(
    private audioService: AudioService,
    public cloudService: CloudService,
    public authService: AuthService
  ) {
    this.authService.user$.subscribe(userData => {
      this.user = userData;
      if (this.user) {
        this.cloudService.getLikedSongData(this.user).subscribe(data => {
          this.likedSongFile = data.map(e => e.payload.doc.data());
          this.likedSongId = data.map(e => {
            return {
              likedSongId: e.payload.doc.id,
              id: e.payload.doc.get('id')
            };
          });
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
    this.audioService.stop();
    this.playStream(file.musicURL);
  }

  addToLikedSong(user, file) {
    return this.cloudService.updateLikedSongData(user, file);
  }

  isInLikedSong(file) {
    for (const song of this.likedSongFile) {
      if (file.id === song.id) {
        return true;
      }
    }
    return false;
  }

  deleteFromLikedSong(user, file) {
    for (const song of this.likedSongId) {
      if (song.id === file.id) {
        return this.cloudService.deleteLikeSongData(user, song.likedSongId);
      }
    }
  }
}
