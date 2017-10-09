import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { UserAccountApi, InsuranceApi } from '../../../shared/sdk';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-add-insurance',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [UserAccountApi,InsuranceApi]
})
export class AddInsuranceComponent implements OnInit {
  msgs: Message[] = [];
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
            this.showSuccess('Success','New insurance successfully added');
            this.insuranceForm.reset();
            setTimeout(() =>{ this.router.navigate(['localization/insurance'])},3000);
          });
    }
  }

  showSuccess(summary,detail) {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:summary, detail:detail});
  }

}
