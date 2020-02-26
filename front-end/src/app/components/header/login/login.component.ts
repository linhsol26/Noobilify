import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import { LoginDialogComponent } from '../../dialog/login-dialog/login-dialog.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private dialogService: NbDialogService,
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

  open() {
    this.dialogService.open(LoginDialogComponent);
  }

}
