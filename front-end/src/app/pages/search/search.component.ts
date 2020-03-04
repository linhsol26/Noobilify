import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbSearchService } from '@nebular/theme';
import { CloudService } from 'src/app/services/cloud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  files: Array<any> = [];
  searchFiles: Array<any> = [];
  value: any;
  constructor(
    private searchService: NbSearchService,
    private cloudService: CloudService,
    private router: Router
  ) {
    this.files = this.cloudService.files;
    this.searchBySubmit();
    this.searchByInput();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.searchByInput().unsubscribe();
    this.searchBySubmit().unsubscribe();
  }

  searchBySubmit() {
    return this.searchService.onSearchSubmit()
    .subscribe(data => {
      this.searchFiles = [];
      this.value = data.term;
      for (const file of this.files) {
        const name = file.name.toLocaleLowerCase().includes(data.term.toLocaleLowerCase());
        const artist = file.artist.toLocaleLowerCase().includes(data.term.toLocaleLowerCase());
        const singer = file.singer.toLocaleLowerCase().includes(data.term.toLocaleLowerCase());
        if (name || artist || singer) {
          this.searchFiles.push(file);
        }
      }
    });
  }

  searchByInput() {
    return this.searchService.onSearchInput()
    .subscribe(data => {
      this.searchFiles = [];
      this.value = data.term;
      for (const file of this.files) {
        const name = file.name.toLocaleLowerCase().includes(data.term.toLocaleLowerCase());
        const artist = file.artist.toLocaleLowerCase().includes(data.term.toLocaleLowerCase());
        const singer = file.singer.toLocaleLowerCase().includes(data.term.toLocaleLowerCase());
        if (name || artist || singer) {
          this.searchFiles.push(file);
        }
      }
    });
  }

}
