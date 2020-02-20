import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayListRoutingModule } from './play-list-routing.module';
import { PlayListComponent } from './play-list.component';
import { NbListModule, NbCardModule } from '@nebular/theme';
import { UIModule } from 'src/app/ui/ui.module';


@NgModule({
  declarations: [PlayListComponent],
  imports: [
    CommonModule,
    PlayListRoutingModule,
    NbListModule,
    NbCardModule,
    UIModule
  ]
})
export class PlayListModule { }
