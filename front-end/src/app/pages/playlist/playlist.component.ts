import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { CloudService } from '../../services/cloud.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  playlist;
  selectedId;
  constructor(
    private auth: AuthService,
    private cloud: CloudService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(map(params => params.get('id'))).subscribe(id => {
      this.selectedId = id;
      this.auth.user$.subscribe(user => {
        this.cloud.getPlaylist(user).subscribe(x => {
          x.forEach(data => {
            const doc = data.payload.doc.data();
            if (doc.title === this.selectedId) {
              this.playlist = doc;
            }
          });
        });
      });
    });
  }
}
