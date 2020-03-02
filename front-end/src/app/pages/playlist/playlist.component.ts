import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CloudService } from 'src/app/services/cloud.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  playlist$: Observable<object>;
  selectedId;
  constructor(private auth: AuthService,private cloud: CloudService,private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(switchMap(params => {
      this.selectedId = params.get('id');
      return this.cloud.getPlaylist(this.auth.user$, params.get('id'));
    })).subscribe(test => {
      console.log(test);
    });
  }

}
