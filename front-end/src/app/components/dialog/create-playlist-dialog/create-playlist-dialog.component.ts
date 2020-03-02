import { Component, OnInit } from '@angular/core';
import { CloudService } from 'src/app/services/cloud.service';

@Component({
  templateUrl: './create-playlist-dialog.component.html',
  styleUrls: ['./create-playlist-dialog.component.scss']
})
export class CreatePlaylistDialogComponent implements OnInit {
  value = '';
  constructor(private cloud: CloudService) { }

  ngOnInit() {
  }

  sumbit() {
    console.log(this.value);
  }
}
