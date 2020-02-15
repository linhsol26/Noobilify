import {
  Component, OnInit
} from '@angular/core';
import { AudioService } from 'src/app/service/audio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {
  MusicProcess;
  MusicTimeElapsed;
  constructor(private audioService: AudioService) {
    audioService.getTimeElapsed().subscribe({
      next: val => this.MusicTimeElapsed = val,
      error: val => console.log('err' + val.message),
    });
  }
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
    if (this.audioService.audio.paused) {
      this.audioService.setAudio('https://c1-ex-swe.nixcdn.com/NhacCuaTui921/BaiCaTuoiTre-DaLABLinhCaoMelG-4452195.mp3?st=PGsrtjc6xMhQG_Mz7FUdPQ&e=1581822473&download=true');
      this.audioService.audio.play();
      console.log(this.audioService.audio.buffered);
    } else {
      this.audioService.audio.pause();
    }
  }

}
