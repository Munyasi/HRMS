import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { UserAccountApi, PatientApi } from '../../shared/sdk';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [UserAccountApi,PatientApi]
})
export class AddPatientComponent implements OnInit {

  patientForm: FormGroup;
  post: any;
  constructor(private fb: FormBuilder, private router: Router, protected user:UserAccountApi, protected patient: PatientApi) {
    this.user.isAuthenticated()?false:this.router.navigate(['login']);
    this.patientForm = fb.group({
      'first_name' : [null, Validators.required],
      'middle_name' : [null, Validators.required],
      'surname' : [null, Validators.required],
      'dob' : [null, Validators.required],
      'gender' : [null, Validators.required],
      'marital_status' : [null, Validators.required],
      'occupation' : [null, Validators.required],
      'email' : [null, Validators.required],
      'phone_number' : [null, Validators.required],
      'city' : [null, Validators.required],
      'town' : [null, Validators.required],
      'street' : [null, Validators.required],
      'postal_code' : [null, Validators.required],
      'postal_address' : [null, Validators.required],
      'notes' : [null],
      'emergency_contact_name' : [null, Validators.required],
      'emergency_contact_phone' : [null, Validators.required],
      'emergency_contact_relation' : [null, Validators.required],
    });
  }


  ngOnInit() {
  }

  submit(post) {
    if (this.patientForm.valid) {
      this.patient.create(post)
          .subscribe(res => {
            console.log(res);
            //this.router.navigate(['patients']);
          });
    }
  }

}
