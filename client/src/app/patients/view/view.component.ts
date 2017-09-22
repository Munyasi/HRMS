import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAccountApi, PatientApi,PatientHospitalApi } from '../../shared/sdk';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  providers: [UserAccountApi,PatientApi,PatientHospitalApi]
})
export class ViewComponent implements OnInit {

  patient_id:number;
  authorization_code: string;
  general_patient_info = {};
  public doughnutChartType = 'doughnut';
  public analytics = {};

  constructor(private router: Router,private route: ActivatedRoute, protected user:UserAccountApi, protected patient: PatientApi, protected patientHospital:PatientHospitalApi) {
    this.user.isAuthenticated()?false:this.router.navigate(['login']);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.patient_id = params['id'];
      this.authorization_code = params['authorization_code'];
    });

    this.patient.getAllDetails({id:this.patient_id,code:this.authorization_code})
        .subscribe(res => {
          this.general_patient_info = res.data;
          let hospital_data = this.general_patient_info['facilities'];
          let f_h = [];
          let l_h = [];
          hospital_data.forEach(function (value,index) {
            f_h.push(value.frequency);
            l_h.push(value.name);
          });

          let diagnosis_data = this.general_patient_info['diagnosis'];
          let f_d = [];
          let l_d = [];
          diagnosis_data.forEach(function (value,index) {
            f_d.push(value.frequency);
            l_d.push(value.name);
          });

          let medication_data = this.general_patient_info['medication'];
          let f_m = [];
          let l_m = [];
          medication_data.forEach(function (value,index) {
            f_m.push(value.frequency);
            l_m.push(value.name);
          });
          this.analytics={hospital:{labels:l_h,frequency:f_h},diagnosis:{labels:l_d,frequency:f_d},medication:{labels:l_m,frequency:f_m}}
        });
  }



  checkoutPatient(){
    this.patient.count({authorization_code:this.authorization_code,id:this.patient_id})
        .subscribe(res => {
          if(res.count){
            this.router.navigate(['patients/checkout/'+this.patient_id+'/'+this.authorization_code]);
          }
        });
  }
}
