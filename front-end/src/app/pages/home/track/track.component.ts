import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { AudioService } from "src/app/services/audio.service";
import { CloudService } from "src/app/services/cloud.service";
import { AuthService } from "src/app/services/auth.service";
import { NbMenuService, NbToastrService } from "@nebular/theme";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-track",
  templateUrl: "./track.component.html",
  styleUrls: ["./track.component.scss"]
})
export class TrackComponent implements OnInit, OnDestroy {
  @Input() file;
  likedSongFile: Array<any> = [];
  likedSongId: Array<any> = [];
  Playlists = [];
  user: any;

  items = [
    {
      title: ""
    }
  ];

  @Input()
  tag;
  @Input()
  isInPlaylist;
  @Input()
  playlistName;

  constructor(
    private audioService: AudioService,
    public cloudService: CloudService,
    public authService: AuthService,
    private nbMenuService: NbMenuService,
    private toater: NbToastrService
  ) {
    this.getLikedSongData();
    this.getPlaylistData();
  }

  ngOnInit() {
    this.menuPlaylistClick();
  }

  ngOnDestroy() {
    this.getLikedSongData().unsubscribe();
    this.menuPlaylistClick().unsubscribe();
  }

  menuPlaylistClick() {
    return this.nbMenuService.onItemClick().subscribe(x => {
      if (this.tag == x.tag)
        if (!this.isInPlaylist) {
          var isExit = false;
          if (x.tag == this.file.id) {
            this.Playlists.forEach(async data => {
              if (data.title == x.item.title) {
                for (const element of data.Song) {
                  if (element.name == this.file.name) {
                    isExit = true;
                    break;
                  }
                }
                if (!isExit) {
                  data.Song.push(this.file);
                  await this.cloudService
                    .addSongToPlaylist(this.user, data, data.title)
                    .then(result => {
                      this.toater.show("Thêm thành công", "Thông báo", {
                        status: "success"
                      });
                    })
                    .catch(err => {
                      console.log(err.message);
                    });
                } else {
                  this.toater.show("Playlist đã tồn tại bài này", "Thông báo", {
                    status: "warning"
                  });
                }
              }
            });
          }
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
              id: e.payload.doc.get("id")
            };
          });
        });
      }
    });
  }

  getPlaylistData() {
    this.authService.user$.subscribe(user => {
      if (user != null) {
        this.cloudService.getAllPlaylist(this.user).subscribe(data => {
          this.items.length = 0;
          this.Playlists.length = 0;
          if (!this.isInPlaylist) {
            data.forEach(x => {
              const temp = { title: x.payload.doc.data().title };
              this.items.push(temp);
              this.Playlists.push(x.payload.doc.data());
            });
          } else {
            this.items.push({ title: "Remove from playlist" });
            data.forEach(x => {
              this.Playlists.push(x.payload.doc.data());
            });
          }
        });
      }
    });
  }

  removeFromPlaylist() {
    let arr = this.playlistName.Song.map(x => x);
    arr.length = 0;
    for(const Song of this.playlistName.Song) {
      if(this.file.name !== Song.name) {
        arr.push(Song);
      }
    }
    this.playlistName.Song = arr;
      if(this.user != null) {
        this.cloudService.addSongToPlaylist(this.user, this.playlistName, this.playlistName.title).then(result => {
          console.log('DONE');
        }).catch(err => {
          console.log("ERROR");
        })
      }

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
