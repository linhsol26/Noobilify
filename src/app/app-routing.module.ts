import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// tslint:disable-next-line:max-line-length
const routes: Routes = [{ path: 'newmusic', loadChildren: () => import('./pages/new-music/new-music.module').then(m => m.NewMusicModule) }, { path: 'categories', loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesModule) }, { path: 'artist', loadChildren: () => import('./pages/artist/artist.module').then(m => m.ArtistModule) }, { path: 'userProfile', loadChildren: () => import('./pages/user-profile/user-profile.module').then(m => m.UserProfileModule) }, { path: 'fav-list', loadChildren: () => import('./pages/fav-list/fav-list.module').then(m => m.FavListModule) }, { path: 'userPlayList', loadChildren: () => import('./pages/user-play-list/user-play-list.module').then(m => m.UserPlayListModule) }, { path: 'setting', loadChildren: () => import('./pages/setting/setting.module').then(m => m.SettingModule) }, { path: 'playlist/:id', loadChildren: () => import('./pages/play-list/play-list.module').then(m => m.PlayListModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
