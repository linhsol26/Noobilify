import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { NbListModule, NbCardModule, NbIconModule, NbButtonModule } from '@nebular/theme';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [PlaylistComponent],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    NbCardModule,
    NbListModule,
    NbButtonModule,
    NbIconModule,
    HomeModule
  ]
})
export class PlaylistModule { }
