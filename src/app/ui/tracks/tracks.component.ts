import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {

  @Input()
  info;

  constructor() { }

  ngOnInit() {
  }

}
