import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayListRoutingModule } from './play-list-routing.module';
import { PlayListComponent } from './play-list.component';
import { NbButtonModule } from '@nebular/theme';


@NgModule({
  declarations: [PlayListComponent],
  imports: [
    CommonModule,
    PlayListRoutingModule,
    NbButtonModule
  ]
})
export class PlayListModule { }
