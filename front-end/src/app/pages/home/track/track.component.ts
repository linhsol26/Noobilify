import { Component, OnInit, Input } from '@angular/core';
import { AudioService } from '../../../services/audio.service';
import { CloudService } from '../../../services/cloud.service';
import { AuthService } from '../../../services/auth.service';
import { async } from '@angular/core/testing';
import { filter, map } from 'rxjs/operators';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  @Input() file: any;
  likedSongFile: Array<any> = [];
  likedSongId: Array<any> = [];
  Playlists = [];
  user: any;

  items = [];
  nbMenuService: any;

  constructor(
    private audioService: AudioService,
    public cloudService: CloudService,
    public authService: AuthService,
    private menuService: NbMenuService) {
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
        this.cloudService.getAllPlaylist(this.user).subscribe(data => {
          this.items.length = 0;
          data.forEach(x => {
            const temp = { title: x.payload.doc.data().title };
            this.items.push(temp);
          });
        });
      }
    });
  }

  ngOnInit() {
    // this.nbMenuService
    //   .onItemClick()
    //   .pipe(
    //     filter(({ tag }) => tag === "my-context-menu"),
    //     map(({ item: { title } }) => title)
    //   )
    //   .subscribe(title => {
    //     if (title === "Add to Playlist-1") {
    //     }
    //   });
    this.menuService.onItemClick().subscribe(() => {
      console.log('ahihi');
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
