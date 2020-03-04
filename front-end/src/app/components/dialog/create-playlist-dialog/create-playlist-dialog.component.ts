import { Component, OnInit } from "@angular/core";
import { CloudService } from "src/app/services/cloud.service";
import { AuthService } from "src/app/services/auth.service";
import { NbDialogRef } from "@nebular/theme";
import { NbToastrService } from "@nebular/theme";
import { take } from "rxjs/operators";
@Component({
  templateUrl: "./create-playlist-dialog.component.html",
  styleUrls: ["./create-playlist-dialog.component.scss"]
})
export class CreatePlaylistDialogComponent implements OnInit {
  value = "";
  user;
  isExit = false;
  constructor(
    private auth: AuthService,
    private cloud: CloudService,
    public dialogRef: NbDialogRef<CreatePlaylistDialogComponent>,
    private toater: NbToastrService
  ) {
    this.auth.user$.subscribe(t => {
      this.user = t;
    });
  }

  ngOnInit() {}

  async sumbit() {
    if (this.user != null) {
      this.cloud
        .getAllPlaylist(this.user)
        .pipe(take(1))
        .subscribe(data => {
          for (const items of data) {
            if (items.payload.doc.data().title == this.value) {
              this.isExit = true;
            }
          }
          if (!this.isExit) {
            this.cloud
              .createPlayList(this.user, this.value)
              .then(() => {
                this.toater.show("Success", "Thông báo", {
                  status: "success"
                });
                this.dialogRef.close();
              })
              .catch(() => {
                console.log("ERROR");
              });
          } else {
            console.log(this.isExit);
            this.toater.show("Playlist is exit", "Thông báo", {
              status: "warning"
            });
          }
        });
    }
  }
}
