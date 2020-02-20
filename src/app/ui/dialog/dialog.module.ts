import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogRoutingModule } from './dialog-routing.module';
import { CreateNewPlayListComponent } from './create-new-play-list/create-new-play-list.component';
import { NbInputModule, NbButtonModule, NbDialogModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [CreateNewPlayListComponent],
  imports: [
    CommonModule,
    DialogRoutingModule,
    NbInputModule,
    NbButtonModule,
    FormsModule,
    NbDialogModule.forChild(),
    NbDialogModule.forRoot()
  ],
  entryComponents: [CreateNewPlayListComponent]
})
export class DialogModule { }
