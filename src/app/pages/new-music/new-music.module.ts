import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewMusicRoutingModule } from './new-music-routing.module';
import { NewMusicComponent } from './new-music.component';


@NgModule({
  declarations: [NewMusicComponent],
  imports: [
    CommonModule,
    NewMusicRoutingModule
  ]
})
export class NewMusicModule { }
