import { Component, OnInit } from '@angular/core';
import { NbSearchService } from '@nebular/theme';
import { CloudService } from 'src/app/services/cloud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  files: Array<any> = [];
  searchFiles: Array<any> = [];
  value: any;
  constructor(
    private searchService: NbSearchService,
    private cloudService: CloudService,
    private router: Router
  ) {
    this.cloudService.getMusicData().subscribe(data => {
      this.files = data.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.get('name'),
          singer: e.payload.doc.get('singer'),
          artist: e.payload.doc.get('artist'),
          musicURL: e.payload.doc.get('musicURL'),
          imgURL: e.payload.doc.get('imgURL'),
          musicPath: e.payload.doc.get('musicPath'),
          imgPath: e.payload.doc.get('imgPath')
        };
      });
    });

    this.searchBySubmit();
    this.searchByInput();
  }

  ngOnInit() {
  }

  searchBySubmit() {
    this.searchService.onSearchSubmit()
    .subscribe(data => {
      this.searchFiles = [];
      this.value = data.term;
      for (const file of this.files) {
        const name = file.name.toLocaleLowerCase().includes(data.term.toLocaleLowerCase());
        const artist = file.artist.toLocaleLowerCase().includes(data.term.toLocaleLowerCase());
        const singer = file.singer.toLocaleLowerCase().includes(data.term.toLocaleLowerCase());
        if (name || artist || singer) {
          this.searchFiles.push(file);
          console.log(this.searchFiles);
        }
      }
    });
  }

  searchByInput() {
    this.searchService.onSearchInput()
    .subscribe(data => {
      this.searchFiles = [];
      this.value = data.term;
      for (const file of this.files) {
        const name = file.name.toLocaleLowerCase().includes(data.term.toLocaleLowerCase());
        const artist = file.artist.toLocaleLowerCase().includes(data.term.toLocaleLowerCase());
        const singer = file.singer.toLocaleLowerCase().includes(data.term.toLocaleLowerCase());
        if (name || artist || singer) {
          this.searchFiles.push(file);
          console.log(this.searchFiles);
        }
      }
    });
  }

}
