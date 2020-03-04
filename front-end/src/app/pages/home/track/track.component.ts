import { AudioService } from "../../../services/audio.service";
import { CloudService } from "../../../services/cloud.service";
import { AuthService } from "../../../services/auth.service";

import { NbMenuService, NbMenuItem, NbToastrService } from "@nebular/theme";
import { OnInit, Input, Component } from "@angular/core";

@Component({
  selector: "app-track",
  templateUrl: "./track.component.html",
  styleUrls: ["./track.component.scss"]
})
export class TrackComponent implements OnInit {
  @Input() file: any;
  @Input() tag: any;
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
  isInPlaylist;
  @Input()
  playlistName = "";

  constructor(
    private audioService: AudioService,
    public cloudService: CloudService,
    public authService: AuthService,
    private nbMenuService: NbMenuService,
    private toater: NbToastrService
  ) {
    this.authService.user$.subscribe(userData => {
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
        // if(!this.isInPlaylist) {
        //   this.cloudService.getAllPlaylist(this.user).subscribe(data => {
        //     this.items.length = 0;
        //     this.Playlists.length = 0;
        //     data.forEach(x => {
        //       const temp = { title: x.payload.doc.data().title };
        //       this.items.push(temp);
        //       this.Playlists.push(x.payload.doc.data());
        //     });
        //   });
        // }else if(this.isInPlaylist) {
        //   this.items.length = 0;
        //   this.items.push({title: "Remove from playlist"});
        // }

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

  ngOnInit() {
    // this.nbMenuService.onItemClick()
    // .pipe(
    //   filter(({ tag }) => tag === 'my-context-menu'),
    //   map(({ item: { title } }) => title),
    // )
    // .subscribe(title => {
    //   if (title === 'Add to Playlist') {
    //   }
    // });

    this.nbMenuService.onItemClick().subscribe(x => {
      if (!this.isInPlaylist) {
        var isExit = false;
        if (x.tag == this.file.id) {
          console.log(x.tag + " " + this.file.id);
          this.Playlists.forEach(data => {
            if (data.title == x.item.title) {
              for (const element of data.Song) {
                if (element.name == this.file.name) {
                  isExit = true;
                  break;
                }
              }
              if (!isExit) {
                data.Song.push(this.file);
                this.cloudService
                  .addSongToPlaylist(this.user, data, data.title)
                  .then(result => {
                    console.log("ahihi");
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

    // } else if (this.isInPlaylist) {
    //   this.nbMenuService.onItemClick().subscribe(async x => {
    //     if (this.file.id == x.tag) {
    //       for (const item of this.Playlists) {
    //         if (item.title == this.playlistName) {
    //           item.Song = item.Song.filter(song => song.id != this.file.id);
    //           await this.cloudService
    //             .addSongToPlaylist(this.user, item, item.title)
    //             .then(() => {
    //               console.log("Xoá thành công");
    //             })
    //             .catch(() => {
    //               console.log("ERROR");
    //             });
    //         }
    //       }
    //       // this.cloudService.addSongToPlaylist(this.user, this.Playlists, x.title);
    //     }
    //   });
    // }
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
