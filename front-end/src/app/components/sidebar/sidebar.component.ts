import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CloudService } from 'src/app/services/cloud.service';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  user: any;

  menuItems = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: ['home'],
    },
    {
      title: 'Search',
      icon: 'search-outline',
      link: ['search'],
    },
    {
      title: 'Library',
      icon: 'book-outline',
      link: ['library'],
      hidden: true,
    },
    {
      title: 'Playlist',
      icon: 'headphones-outline',
      hidden: true,
      children: [
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
      link: ['upload'],
      hidden: true,
    }
  ];

  constructor(
    private authService: AuthService
  ) {
    this.authService.user$.subscribe(userData => {
      this.user = userData;

      if (this.user !== null) {
        this.menuItems.forEach(item => item.hidden = false);
      } else {
        this.menuItems.forEach(item => {
          if (item.title === 'Home' || item.title === 'Search') {
            item.hidden = false;
          } else {
            item.hidden = true;
          }
        });
      }
    });
  }

  ngOnInit() {
  }
}
