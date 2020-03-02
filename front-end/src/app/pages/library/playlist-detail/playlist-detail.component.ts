import * as core from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CreatePlaylistDialogComponent } from 'src/app/components/dialog/create-playlist-dialog/create-playlist-dialog.component';
import { AuthService } from 'src/app/services/auth.service';
import { CloudService } from 'src/app/services/cloud.service';

@core.Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.scss']
})
export class PlaylistDetailComponent implements core.OnInit {
  constructor(
    private dialog: NbDialogService,
    private auth: AuthService,
    private cloud: CloudService
  ) {}
  playlists = [];
  ngOnInit() {
    this.auth.user$.subscribe(user => {
      if (user) {
        this.cloud.getAllPlaylist(user).subscribe(data => {
          this.playlists.length = 0;
          data.forEach(x => {
            this.playlists.push(x.payload.doc.data());
          });
        });
      }
    });
  }

  openDialog() {
    this.dialog.open(CreatePlaylistDialogComponent, {
      context: 'ahhihi'
    });
  }
}
