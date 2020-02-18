import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { TracksComponent } from './tracks/tracks.component';
import { PlayListBoxComponent } from './play-list-box/play-list-box.component';
import { PlayListTopHitComponent } from './play-list-top-hit/play-list-top-hit.component';
import { SongTopHitComponent } from './song-top-hit/song-top-hit.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NbLayoutModule, NbSidebarModule, NbCardModule, NbMenuModule, NbUserModule, NbIconModule, NbSearchModule } from '@nebular/theme';
import { AudioService } from '../service/audio.service';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [ToolBarComponent, NavBarComponent,
    MusicPlayerComponent, ToolBarComponent,
    TracksComponent, PlayListBoxComponent,
    PlayListTopHitComponent, SongTopHitComponent, SearchBarComponent],
  imports: [
    CommonModule,
    NbSidebarModule,
    NbCardModule,
    NbMenuModule,
    NbUserModule,
    NbIconModule,
    NbSearchModule
  ],
  exports: [ToolBarComponent,
    NavBarComponent,
    MusicPlayerComponent,
    TracksComponent,
    PlayListBoxComponent,
    PlayListTopHitComponent,
    SongTopHitComponent,
    SearchBarComponent,
  ],
  providers:[AudioService]
})
export class UIModule { }
