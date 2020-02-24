import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist.component';
import { NbCardModule, NbUserModule } from '@nebular/theme';
import { UIModule } from 'src/app/ui/ui.module';


@NgModule({
  declarations: [ArtistComponent],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    NbCardModule,
    UIModule
  ]
})
export class ArtistModule { }
