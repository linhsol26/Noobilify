import {
  Component, OnInit
} from '@angular/core';
import { AudioService } from 'src/app/service/audio.service';
import { Observable } from 'rxjs';
import { StreamState } from 'src/app/interfaces/stream-state';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent {
  constructor(private audioService: AudioService) {

  }
  isPlaying = false;
  value = 0;
  items: Array<any> = [
    {
      Name: 'Mot Nha',
      Url: 'https://c1-ex-swe.nixcdn.com/Sony_Audio55/MotNha-DaLAB-5798631.mp3?st=qZevoE5ZFM91OF08KuXA7g&e=1582083928&t=1581997528104',
      Singer: 'Da Lab',
    },
    {
      Name: 'Hay trao cho anh',
      // tslint:disable-next-line:max-line-length
      Url: 'https://c1-ex-swe.nixcdn.com/NhacCuaTui985/HayTraoChoAnh-SonTungMTPSnoopDogg-6010660.mp3?st=tQ5uowJQ1f8qB3x1hKTf0w&e=1582082652&t=1581996252450',
      Singer: 'Son Tung MTP',
    },
    {
      Name: 'Thanh Xuan',
      Url: 'https://c1-ex-swe.nixcdn.com/Sony_Audio52/ThanhXuan-DaLAB-5773854.mp3?st=AzUA5WQIFQxHzVCWSC-Ymw&e=1582083943&t=1581997547755',
      Singer: 'Da Lab',
    }
  ];
  current = 0;
  currentItem = this.items[this.current];
  state: StreamState;
  currentFile: any = {};
  random = false;
  loop = false;
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
  }

  seekto() {
    this.audioService.seekTo(this.state.duration / 100 * this.value);
  }

  playStream() {
    this.audioService.playStream(this.currentItem.Url).subscribe(events => {
      if (events.type === 'ended') {
        this.test();
      }
    });

    this.audioService.getState().subscribe(state => {
      this.state = state;
      this.value = (this.state.currentTime / this.state.duration * 100);
    });
  }


  test() {
    if (this.loop === true) {
      this.playStream();
    } else if (this.random === true) {
      console.log('OK');
      this.current = Math.floor(Math.random() * this.items.length);
      this.currentItem = this.items[this.current];
      this.playStream();
    }
  }
  playMusic() {
    if (this.state === undefined) {
      this.playStream();
      this.isPlaying = true;
    } else if (!this.state.playing) {
      this.audioService.play();
      this.isPlaying = true;
    } else {
      this.audioService.pause();
      this.isPlaying = false;
    }
  }
  nextMusic() {
    if (this.current < this.items.length - 1) {
      this.current++;
      this.state = undefined;
      this.currentItem = this.items[this.current];
      this.isPlaying = true;
      this.playStream();
    }
  }
  previusMusic() {
    if (this.current > 0) {
      this.current--;
      this.state = undefined;
      this.currentItem = this.items[this.current];
      this.isPlaying = true;
      this.playStream();
    }
  }
}
