import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewMusicRoutingModule } from './new-music-routing.module';
import { NewMusicComponent } from './new-music.component';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [NewMusicComponent],
  imports: [
    CommonModule,
    NewMusicRoutingModule,
    NbCardModule
  ]
})
export class NewMusicModule { }
