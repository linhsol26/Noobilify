import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPlayListRoutingModule } from './user-play-list-routing.module';
import { UserPlayListComponent } from './user-play-list.component';


@NgModule({
  declarations: [UserPlayListComponent],
  imports: [
    CommonModule,
    UserPlayListRoutingModule
  ]
})
export class UserPlayListModule { }
