import { Component, OnInit } from '@angular/core';
import { CloudService } from 'src/app/services/cloud.service';
import { AuthService } from 'src/app/services/auth.service';
import { NbDialogService, NbDialogRef } from '@nebular/theme';

@Component({
  templateUrl: './create-playlist-dialog.component.html',
  styleUrls: ['./create-playlist-dialog.component.scss']
})
export class CreatePlaylistDialogComponent implements OnInit {
  value = '';
  user;
  constructor(private auth: AuthService, private cloud: CloudService, public dialogRef: NbDialogRef<CreatePlaylistDialogComponent>) {
    this.auth.user$.subscribe(t => {
      this.user = t;
    });
   }

  ngOnInit() {
  }

  sumbit() {
    if (this.user != null) {
      return this.cloud.createPlayList(this.user, this.value).then(() => {
        console.log('Thanh Cong');
        this.dialogRef.close();
      }).catch(() => {
        console.log('ERROR');
        this.dialogRef.close();
      });
    }
  }

}
