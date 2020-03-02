import { Component, OnInit } from '@angular/core';
import { CloudService } from 'src/app/services/cloud.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './create-playlist-dialog.component.html',
  styleUrls: ['./create-playlist-dialog.component.scss']
})
export class CreatePlaylistDialogComponent implements OnInit {
  value = '';
  user;
  constructor(private auth: AuthService, private cloud: CloudService) {
    this.auth.user$.subscribe(t => {
      this.user = t;
    });
   }

  ngOnInit() {
  }

  sumbit() {
    const id = this.value.split('').join('');
    if (this.user != null) {
      return this.cloud.createPlayList(this.user, id, this.value).then(() => {
        console.log('Thanh Cong');
      }).catch(() => {
        console.log('ERROR');
      });
    }
  }

}
