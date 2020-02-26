import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  items = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: ['home'],
    },
    {
      title: 'Library',
      icon: 'book-outline',
      link: ['library'],
    },
    {
      title: 'Playlist',
      icon: 'headphones-outline',
      children: [
        {
          title: 'New Playlist',
          icon: 'plus-square-outline'
        },
        {
          title: 'Liked Song',
          icon: 'heart-outline',
          link: ['library/liked-song']
        },
      ],
    },
    {
      title: 'Upload music',
      icon: 'cloud-upload-outline',
      link: ['upload']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
