import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogService, NbDialogRef } from '@nebular/theme';
import { DataService } from 'src/app/service/data.service';

@Component({
  templateUrl: './create-new-play-list.component.html',
  styleUrls: ['./create-new-play-list.component.scss']
})
export class CreateNewPlayListComponent implements OnInit {

  PlayListName: string = "";
  constructor(protected dialogRef: NbDialogRef<String>, public dataService: DataService) { }

  ngOnInit() {
  }
  
  sumbit(){
    this.dataService.addPlayListToUser({
      title: this.PlayListName,
    });
    this.dialogRef.close();
  }
  cancel(){
    this.dialogRef.close();
  }

  test(evt) {
    if(evt.key === 'Enter'){
      this.sumbit();
    }
  }
}
