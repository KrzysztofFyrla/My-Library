import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,
              private router: Router,
              private snackbar: MatSnackBar) {
  }

  onSubmit(): void {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.goToList();
        this.snackbar.open('Użytkownik został dodany pomyślnie', '', { duration: 2000 });
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  goToList(): void {
    const url = '/auth';
    this.router.navigateByUrl(url);
  }
}
