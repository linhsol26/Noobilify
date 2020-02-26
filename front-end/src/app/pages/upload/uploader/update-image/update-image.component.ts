import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-image',
  templateUrl: './update-image.component.html',
  styleUrls: ['./update-image.component.scss']
})
export class UpdateImageComponent implements OnInit {

  isHovering: boolean;
  files: File[] = [];
  @Output() imgFiles = new EventEmitter<File[]>();

  constructor() { }

  ngOnInit() {
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
    this.imgFiles.emit(this.files);
  }

}
