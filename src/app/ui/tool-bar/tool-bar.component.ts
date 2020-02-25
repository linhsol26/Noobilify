import { Component } from '@angular/core';
import { NbThemeService, NbDialogService } from '@nebular/theme';
import { AuthService } from 'src/app/service/auth.service';
import { CreateNewPlayListComponent } from '../dialog/create-new-play-list/create-new-play-list.component';
import { PlayListBoxComponent } from '../play-list-box/play-list-box.component';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {

  // tslint:disable-next-line:max-line-length
  constructor(public changeThemes: NbThemeService, public authService: AuthService, private dialogService: NbDialogService, private dataService: DataService) {
  }
  PlayList = this.dataService.fetch();
  items = [
    {
      // icon: 'person-outline',
      // title: 'Profile',
      // expanded: true,
      // children: [
      //   {
      //     title: 'Change Password',
      //     link: [], // goes into angular `routerLink`
      //   },
      //   {
      //     title: 'Privacy Policy',
      //     url: '#', // goes directly into `href` attribute
      //   },
      //   {
      //     title: 'Logout',
      //     link: [],
      //   },
      // ],
    },
    {
      icon: 'headphones-outline',
      title: 'Playlist',
      children: this.PlayList,
    },
    {
      icon: 'heart-outline',
      title: 'Favorite Songs',
      link: ['/fav-list']
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

  createNewPlayList() {
    this.dialogService.open(CreateNewPlayListComponent, {
    });
  }
}
