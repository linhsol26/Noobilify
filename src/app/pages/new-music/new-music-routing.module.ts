import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewMusicComponent } from './new-music.component';

const routes: Routes = [{ path: '', component: NewMusicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewMusicRoutingModule { }
