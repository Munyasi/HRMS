import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { UserAccountApi } from '../shared/sdk';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserAccountApi]
})
export class LoginComponent implements OnInit {

  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  username = '';
  password = '';

  constructor(private fb: FormBuilder, private router: Router, protected user:UserAccountApi) {
    this.rForm = fb.group({
      'username' : [null, Validators.required],
      'password' : [null, Validators.compose([Validators.required, Validators.maxLength(500)])],
    });
    this.user.isAuthenticated()?this.router.navigate(['dashboard']):false;
  }

  ngOnInit() {
  }

  submit(post) {
    if (this.rForm.valid) {
      this.user.login(post)
          .subscribe(res => {
            this.router.navigate(['dashboard']);
          });
    }
  }

}
