import { Component} from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent  {
  constructor(public changeThemes: NbThemeService) {
  }
  isLogin = false;
  items = [
    {
      icon: 'person-outline',
      title: 'Profile',
      expanded: true,
      children: [
        {
          title: 'Change Password',
          link: [], // goes into angular `routerLink`
        },
        {
          title: 'Privacy Policy',
          url: '#', // goes directly into `href` attribute
        },
        {
          title: 'Logout',
          link: [],
        },
      ],
    },
    {
      icon: 'headphones-outline',
      title: 'Playlist',
      children: [
        {
          title: 'pls1',
          link: [], // goes into angular `routerLink`
        },
        {
          title: 'pls2',
          url: '#', // goes directly into `href` attribute
        },
        {
          title: 'pls3',
          link: [],
        },
      ],
    },
    {
      icon: 'heart-outline',
      title: 'Favorite Songs',
      // children: [
      //   {
      //     title: 'First Order',
      //     link: [], // goes into angular `routerLink`
      //   },
      //   {
      //     title: 'Second Order',
      //     url: '#', // goes directly into `href` attribute
      //   },
      //   {
      //     title: 'Third Order',
      //     link: [],
      //   },
      // ],
    },
  ];

  changeTheme(event) {
    if (event === true) {
      this.changeThemes.changeTheme('default');
    } else {
      this.changeThemes.changeTheme('cosmic');
    }
  }
}
