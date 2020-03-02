import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CreatePlaylistDialogComponent } from 'src/app/components/dialog/create-playlist-dialog/create-playlist-dialog.component';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.scss']
})
export class PlaylistDetailComponent implements OnInit {

  constructor(private dialog: NbDialogService) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(CreatePlaylistDialogComponent, {
      context: 'ahhihi',
    });
  }

}
