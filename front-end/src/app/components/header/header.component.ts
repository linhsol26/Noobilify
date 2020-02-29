import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public changeThemes: NbThemeService) { }

  ngOnInit() {
  }

  changeTheme(event) {
    if (event === true) {
      this.changeThemes.changeTheme('dark');
    } else {
      this.changeThemes.changeTheme('default');
    }
  }
}
