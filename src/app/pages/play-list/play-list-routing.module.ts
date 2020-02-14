import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayListComponent } from './play-list.component';

const routes: Routes = [{ path: '', component: PlayListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayListRoutingModule { }
