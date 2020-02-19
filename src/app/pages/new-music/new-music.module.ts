import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewMusicRoutingModule } from './new-music-routing.module';
import { NewMusicComponent } from './new-music.component';
import { NbCardModule } from '@nebular/theme';
import { PlayListComponent } from '../play-list/play-list.component';
import { SongTopHitComponent } from 'src/app/ui/song-top-hit/song-top-hit.component';
import { UIModule } from 'src/app/ui/ui.module';
import { PlayListBoxComponent } from 'src/app/ui/play-list-box/play-list-box.component';
import { PlayListTopHitComponent } from 'src/app/ui/play-list-top-hit/play-list-top-hit.component';


@NgModule({
  declarations: [NewMusicComponent],
  imports: [
    CommonModule,
    NewMusicRoutingModule,
    NbCardModule,
    UIModule
  ]
})
export class NewMusicModule { }
