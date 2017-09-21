import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { UserAccountApi, InsuranceApi } from '../../../shared/sdk';

@Component({
  selector: 'app-add-insurance',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [UserAccountApi,InsuranceApi]
})
export class AddInsuranceComponent implements OnInit {

  insuranceForm: FormGroup;
  post: any;
  constructor(private fb: FormBuilder, private router: Router, protected user:UserAccountApi, protected insurance: InsuranceApi) {
    this.user.isAuthenticated()?false:this.router.navigate(['login']);
    this.insuranceForm = fb.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.required],
      'phone_number' : [null, Validators.required],
      'email' : [null, Validators.required],
      'head_office_address' : [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  submit(post) {
    if (this.insuranceForm.valid) {
      this.insurance.create(post)
          .subscribe(res => {
            //console.log(res)
            this.router.navigate(['localization/insurance']);
          });
    }
  }

}
