import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'upload', loadChildren: () => import('./pages/upload/upload.module').then(m => m.UploadModule), },
  { path: 'library', loadChildren: () => import('./pages/library/library.module').then(m => m.LibraryModule), canActivate: [AuthGuard]},
  { path: 'search', loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule), canActivate: [AuthGuard]  },
  // tslint:disable-next-line:max-line-length
  { path: 'playlist/:id', loadChildren: () => import('./pages/playlist/playlist.module').then(m => m.PlaylistModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
