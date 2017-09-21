import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

import { UserAccountApi } from '../../../shared/sdk';

@Component({
  selector: 'app-add-account',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [UserAccountApi]
})
export class AddAccountComponent implements OnInit {
  accountForm: FormGroup;
  post: any;

  constructor(private fb: FormBuilder, private router: Router, protected user:UserAccountApi) {
    this.user.isAuthenticated()?false:this.router.navigate(['login']);
    this.accountForm = fb.group({
      'username' : [null, Validators.required],
      'email' : [null, Validators.required],
      'password' : [null, Validators.compose([Validators.required, Validators.maxLength(500)])],
      'realm' : [null, Validators.required],
      'practitioner_type' : [null, Validators.required],
      'practitioner_full_name' : [null, Validators.required],
      'gender' : [null, Validators.required],
      'practitioner_code' : [null, Validators.required],
      'dob' : [null, Validators.required],
      'phone_number' : [null],
      'validate' : ''
    });
  }

  ngOnInit() {
  }

  submit(post) {
    if (this.accountForm.valid) {
      this.user.create(post)
          .subscribe(res => {
            this.router.navigate(['extras/accounts']);
          });
    }
  }

}
