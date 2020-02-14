import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavListRoutingModule } from './fav-list-routing.module';
import { FavListComponent } from './fav-list.component';


@NgModule({
  declarations: [FavListComponent],
  imports: [
    CommonModule,
    FavListRoutingModule
  ]
})
export class FavListModule { }
