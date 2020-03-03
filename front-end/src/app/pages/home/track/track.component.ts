import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';
import { CloudService } from 'src/app/services/cloud.service';
import { AuthService } from 'src/app/services/auth.service';
import { NbMenuService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit, OnDestroy {

  @Input() file;
  likedSongFile: Array<any> = [];
  likedSongId: Array<any> = [];
  items = [
    {
      title: 'Add to Playlist'
    }
  ];
  user: any;

  constructor(
    private audioService: AudioService,
    public cloudService: CloudService,
    public authService: AuthService,
    private nbMenuService: NbMenuService
  ) {
    this.getLikedSongData();
  }

  ngOnInit() {
    this.menuPlaylistClick();
  }

  ngOnDestroy() {
    this.getLikedSongData().unsubscribe();
    this.menuPlaylistClick().unsubscribe();
  }

  menuPlaylistClick() {
    return this.nbMenuService.onItemClick()
    .pipe(
      filter(({ tag }) => tag === 'my-context-menu'),
      map(({ item: { title } }) => title),
    )
    .subscribe(title => {
      if (title === 'Add to Playlist') {
      }
    });
  }

  getLikedSongData() {
    return this.authService.user$.subscribe(userData => {
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
