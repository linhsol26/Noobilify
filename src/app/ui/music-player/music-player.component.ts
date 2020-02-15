import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent {

  constructor(public audioService: AudioService) { }

  files: Array<any> = [
    { name: 'First Song', artist: 'Inder' },
    { name: 'Second Song', artist: 'You' }
  ];

  state;
  currentFile: any = {};

  changestatus_volunme(evt) {
    if (evt.target.innerText === 'volume_up') {
      evt.target.innerText  = 'volume_off';
    } else {
      evt.target.innerText  = 'volume_up';
    }
  }

  changestatus_musicPlayer(evt) {

  }

  isFirstPlaying() {
    return false;
  }
  isLastPlaying() {
    return true;
  }
  previous() {

  }
}
