import { Component, OnInit } from '@angular/core';
import { NbSearchService } from '@nebular/theme/';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  value = '';

  constructor(private searchService: NbSearchService, public router: Router) {
    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        this.value = data.term;
      });
  }

  toPath(path) {
    this.router.navigateByUrl(path);
  }
}
