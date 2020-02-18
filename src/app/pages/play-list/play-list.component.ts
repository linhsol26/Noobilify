import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})
export class PlayListComponent implements OnInit {

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

  test() {
    console.log('test');
  }
  ngOnInit() {
  }
}
