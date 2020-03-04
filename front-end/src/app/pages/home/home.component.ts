import { Component, OnInit, OnDestroy } from '@angular/core';
import { CloudService } from 'src/app/services/cloud.service';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  files: Array<any> = [];
  headerFiles: Array<any> = [];

  constructor(
    public cloudService: CloudService,
    public audioService: AudioService
  ) {
    this.getMusicData();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.getMusicData().unsubscribe();
  }

  getMusicData() {
    return this.cloudService.getMusicData().subscribe(data => {
      this.files = data.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.get('name'),
          singer: e.payload.doc.get('singer'),
          artist: e.payload.doc.get('artist'),
          musicURL: e.payload.doc.get('musicURL'),
          imgURL: e.payload.doc.get('imgURL'),
          musicPath: e.payload.doc.get('musicPath'),
          imgPath: e.payload.doc.get('imgPath')
        };
      });
      this.cloudService.files = this.files;

      if (this.files.length > 5) {
        for (let i = this.files.length - 1; i > this.files.length - 6; i--) {
          this.headerFiles.push(this.files[i]);
        }
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

}
