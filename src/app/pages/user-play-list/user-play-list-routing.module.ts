import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPlayListComponent } from './user-play-list.component';

const routes: Routes = [{ path: '', component: UserPlayListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPlayListRoutingModule { }
