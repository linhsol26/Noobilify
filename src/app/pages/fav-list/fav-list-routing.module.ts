import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavListComponent } from './fav-list.component';

const routes: Routes = [{ path: '', component: FavListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavListRoutingModule { }
