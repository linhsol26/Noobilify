import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-upload-music',
  templateUrl: './upload-music.component.html',
  styleUrls: ['./upload-music.component.scss']
})
export class UploadMusicComponent implements OnInit {

  isHovering: boolean;
  files: File[] = [];
  @Output() musicFiles = new EventEmitter<File[]>();

  constructor() { }

  ngOnInit() {
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
      this.musicFiles.emit(this.files);
    }
  }

}
