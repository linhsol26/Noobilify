import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {

  constructor() { }
  testSource = [
    {
      name: 'Song name',
      title: 'Artist name',
      // tslint:disable-next-line:max-line-length
      picture: 'https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      name: 'Song name',
      title: 'Artist name',
      // tslint:disable-next-line:max-line-length
      picture: 'https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      name: 'Song name',
      title: 'Artist name',
      // tslint:disable-next-line:max-line-length
      picture: 'https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      name: 'Song name',
      title: 'Artist name',
      // tslint:disable-next-line:max-line-length
      picture: 'https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      name: 'Song name',
      title: 'Artist name',
      // tslint:disable-next-line:max-line-length
      picture: 'https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
  ];
  ngOnInit() {
  }

}
