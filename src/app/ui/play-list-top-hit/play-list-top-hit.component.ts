import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-list-top-hit',
  templateUrl: './play-list-top-hit.component.html',
  styleUrls: ['./play-list-top-hit.component.scss']
})
export class PlayListTopHitComponent implements OnInit {

  constructor() { }
  imgSource = [
    {
      source: '../../../assets/img-test-1.jpg',
      title: 'Song',
    },
    {
      source: '../../../assets/img-test-1.jpg',
      title: 'Song',
    },
    {
      source: '../../../assets/img-test-1.jpg',
      title: 'Song',
    },
    {
      source: '../../../assets/img-test-1.jpg',
      title: 'Song',
    },
    {
      source: '../../../assets/img-test-1.jpg',
      title: 'Song',
    },
  ];

  ngOnInit() {
  }

}
