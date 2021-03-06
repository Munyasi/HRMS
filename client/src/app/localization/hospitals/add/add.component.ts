import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { UserAccountApi, HospitalApi } from '../../../shared/sdk';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [UserAccountApi,HospitalApi]
})
export class AddHospitalComponent implements OnInit {
  msgs: Message[] = [];
  hospitalForm: FormGroup;
  post: any;
  constructor(private fb: FormBuilder, private router: Router, protected user:UserAccountApi, protected hospital: HospitalApi) {
    this.user.isAuthenticated()?false:this.router.navigate(['login']);
    this.hospitalForm = fb.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.required],
      'phone_number' : [null, Validators.required],
      'email' : [null, Validators.required],
      'city' : [null, Validators.required],
      'town' : [null, Validators.required],
      'address' : [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  submit(post) {
    if (this.hospitalForm.valid) {
      this.hospital.create(post)
          .subscribe(res => {
            this.showSuccess('Success','New hospital successfully added');
            this.hospitalForm.reset();
            setTimeout(() =>{ this.router.navigate(['localization/hospitals'])},3000);
          });
    }
  }

  showSuccess(summary,detail) {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:summary, detail:detail});
  }

}
