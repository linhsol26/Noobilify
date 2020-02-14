import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayListRoutingModule } from './play-list-routing.module';
import { PlayListComponent } from './play-list.component';


@NgModule({
  declarations: [PlayListComponent],
  imports: [
    CommonModule,
    PlayListRoutingModule
  ]
})
export class PlayListModule { }
