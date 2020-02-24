import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewMusicRoutingModule } from './new-music-routing.module';
import { NewMusicComponent } from './new-music.component';
import { NbCardModule } from '@nebular/theme';
import { UIModule } from 'src/app/ui/ui.module';


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
