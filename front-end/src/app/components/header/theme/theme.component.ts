import { Component, OnInit } from '@angular/core';
import { NbMenuService, NbThemeService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  items = [
    { title: 'Default' },
    { title: 'Dark' },
    { title: 'Cosmic' }
  ];

  selectedItem = 'Cosmic';

  constructor(
    private nbMenuService: NbMenuService,
    public nbThemeService: NbThemeService
  ) { }

  ngOnInit() {
    this.nbMenuService.onItemClick()
    .pipe(
      filter(({ tag }) => tag === 'my-context-menu'),
      map(({ item: { title } }) => title),
    )
    .subscribe(title => {
      this.selectedItem = title;
      const newTheme = title.toLowerCase();
      this.nbThemeService.changeTheme(`${newTheme}`);
    });
  }
}
