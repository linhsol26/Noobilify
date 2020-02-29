import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {
  NbSearchModule,
  NbContextMenuModule,
  NbButtonModule,
  NbMenuModule,
  NbLayoutModule,
  NbCardModule,
  NbUserModule,
  NbProgressBarModule,
  NbIconModule,
  NbListModule,
  NbInputModule,
  NbToastrModule,
  NbToastrService,
  NbTooltipModule,
  NbToggleModule
} from '@nebular/theme';
import { SearchComponent } from './header/search/search.component';
import { LogoComponent } from './header/logo/logo.component';
import { LoginComponent } from './header/login/login.component';
import { ThemeComponent } from './header/theme/theme.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginDialogComponent } from './dialog/login-dialog/login-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { PlayerComponent } from './footer/player/player.component';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    LogoComponent,
    LoginComponent,
    ThemeComponent,
    SidebarComponent,
    LoginDialogComponent,
    FooterComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    NbSearchModule,
    NbContextMenuModule,
    NbButtonModule,
    NbMenuModule,
    NbLayoutModule,
    NbCardModule,
    NbUserModule,
    NbProgressBarModule,
    NbIconModule,
    NbListModule,
    NbProgressBarModule,
    NbInputModule,
    MatSliderModule,
    NbTooltipModule,
    RouterModule,
    NbToggleModule
  ],
  entryComponents: [LoginDialogComponent],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
