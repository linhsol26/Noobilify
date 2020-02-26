import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadComponent } from './upload.component';
import { DropzoneDirective } from 'src/app/directives/dropzone.directive';
import {
  NbProgressBarModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbListModule
} from '@nebular/theme';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadMusicComponent } from './uploader/upload-music/upload-music.component';
import { UpdateImageComponent } from './uploader/update-image/update-image.component';


@NgModule({
  declarations: [
    UploadComponent,
    UploadTaskComponent,
    UploaderComponent,
    DropzoneDirective,
    UploadMusicComponent,
    UpdateImageComponent
  ],
  imports: [
    CommonModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    UploadRoutingModule,
    NbProgressBarModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbListModule
  ]
})
export class UploadModule { }
