import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { TracksComponent } from './tracks/tracks.component';
import { PlayListBoxComponent } from './play-list-box/play-list-box.component';
import { PlayListTopHitComponent } from './play-list-top-hit/play-list-top-hit.component';
import { SongTopHitComponent } from './song-top-hit/song-top-hit.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [ToolBarComponent, NavBarComponent, MusicPlayerComponent, TracksComponent, PlayListBoxComponent, PlayListTopHitComponent, SongTopHitComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatSliderModule
  ],
  exports: [ToolBarComponent,
    NavBarComponent,
    MusicPlayerComponent,
    TracksComponent,
    PlayListBoxComponent,
    PlayListTopHitComponent,
    SongTopHitComponent],
})
export class UIModule { }
