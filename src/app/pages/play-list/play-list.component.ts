import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayListService } from 'src/app/service/play-list.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})
export class PlayListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private playlistService: PlayListService, private location: Location) { }
  playlist;
  testSource = [
    {
      name: 'Song name',
      title: 'Artist name',
      // tslint:disable-next-line:max-line-length
      picture: 'https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      name: 'Song name',
      title: 'Artist name',
      // tslint:disable-next-line:max-line-length
      picture: 'https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      name: 'Song name',
      title: 'Artist name',
      // tslint:disable-next-line:max-line-length
      picture: 'https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      name: 'Song name',
      title: 'Artist name',
      // tslint:disable-next-line:max-line-length
      picture: 'https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      name: 'Song name',
      title: 'Artist name',
      // tslint:disable-next-line:max-line-length
      picture: 'https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      name: 'Song name',
      title: 'Artist name',
      // tslint:disable-next-line:max-line-length
      picture: 'https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      name: 'Song name',
      title: 'Artist name',
      // tslint:disable-next-line:max-line-length
      picture: 'https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      name: 'Song name',
      title: 'Artist name',
      // tslint:disable-next-line:max-line-length
      picture: 'https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      name: 'Song name',
      title: 'Artist name',
      // tslint:disable-next-line:max-line-length
      picture: 'https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      name: 'Song name',
      title: 'Artist name',
      // tslint:disable-next-line:max-line-length
      picture: 'https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
  ];
  ngOnInit() {
    this.getPlayList();
  }

  getPlayList() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.playlistService.getPlayList(id).subscribe(pl => {
      console.log(pl);
      this.playlist = pl;
    });
  }
}
