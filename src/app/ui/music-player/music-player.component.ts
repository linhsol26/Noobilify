import {
  Component, OnInit
} from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }


  changestatus_volunme(evt) {
    if (evt.target.innerText == 'volume_up') {
      evt.target.innerText = 'volume_off'
    } else {
      evt.target.innerText = 'volume_up'
    }
  }

  changestatus_musicPlayer(evt) {
    
  }

}
