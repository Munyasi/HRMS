import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { UserAccountApi, PatientApi } from '../../shared/sdk';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [UserAccountApi,PatientApi]
})
export class SearchComponent implements OnInit {

  patientSearchForm: FormGroup;
  patientAuthorizationForm: FormGroup;
  patientInfo = null;
  show = false;
  post: any;
  constructor(private fb: FormBuilder, private router: Router, protected user:UserAccountApi, protected patient: PatientApi) {
    this.user.isAuthenticated()?false:this.router.navigate(['login']);
    this.patientSearchForm = fb.group({
      'id' : [null, Validators.required],
    });

    this.patientAuthorizationForm = fb.group({
      'authorization_code' : [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  submit(post) {
    if (this.patientSearchForm.valid) {
      this.patient.search(post.id)
          .subscribe(res => {
            if(res.data){
              this.patientInfo = res.data;
              this.show = true;
            }else{
              this.show = false;
            }
            //this.router.navigate(['patients']);
          });
    }
  }

  resetSearch(){
    this.patientInfo = null;
    this.show = false;
  }

  authorize(post) {
    if (this.patientAuthorizationForm.valid) {
      this.patient.count({authorization_code:post.authorization_code,id:this.patientInfo.id})
          .subscribe(res => {
            if(res.count){
              this.router.navigate(['patients/view/'+this.patientInfo.id+'/'+post.authorization_code]);
            }
          });
    }
  }

}
