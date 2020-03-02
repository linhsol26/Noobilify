import { Component, OnInit } from '@angular/core';
import { NbMenuService, NbThemeService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {


  constructor(
    public nbThemeService: NbThemeService
  ) { }

  ngOnInit() {
  }

  changeTheme(event) {
    if (event === true) {
      this.nbThemeService.changeTheme('dark');
    } else {
      this.nbThemeService.changeTheme('default');
    }
  }
}
