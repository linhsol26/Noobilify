import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  NbDialogRef,
  NbToastrService,
  NbComponentStatus
} from "@nebular/theme";
import { auth } from "firebase/app";
import { AuthService } from "../../../services/auth.service";

@Component({
  templateUrl: "./login-dialog.component.html",
  styleUrls: ["./login-dialog.component.scss"]
})
export class LoginDialogComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private afAuth: AngularFireAuth,
    private dialogRef: NbDialogRef<LoginDialogComponent>,
    private toastrService: NbToastrService
  ) {}

  ngOnInit() {}

  showToast(status: NbComponentStatus, position) {
    this.toastrService.show(status, "Login successfully", {
      status,
      duration: 1000,
      position
    });
  }

  async loginWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    const credetial = await this.afAuth.auth.signInWithPopup(provider);
    return this.authService
      .updateUserData(credetial.user)
      .then(() => {
        this.showToast("success", "bottom-end");
        this.dialogRef.close();
      })
      .catch(err => console.log(err));
  }

  async signOut() {
    await this.authService.logOut();
    location.reload();
    this.dialogRef.close();
  }
}
