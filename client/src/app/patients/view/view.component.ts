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
  analysis_h_labels: string[];
  analysis_h_frequency = [];
  analysis_m_labels : string[];
  analysis_m_frequency : number[];
  analysis_d_labels : string[];
  analysis_d_frequency : number[];

  public doughnutChartType = 'doughnut';
  public analytics = {};
  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];

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
          let f : number[] = [];
          let l : string[] = [];
          hospital_data.forEach(function (value,index) {
            f.push(value.frequency);
            l.push(value.name);
          });
          this.analysis_h_frequency=f;
          this.analysis_h_labels=l;

          let med_data = this.general_patient_info['medication'];
          let f_m : number[] = [];
          let l_m : string[] = [];
          med_data.forEach(function (value,index) {
            f_m.push(value.frequency);
            l_m.push(value.name);
          });
          this.analysis_m_frequency=f_m;
          this.analysis_m_labels=l_m;


          let diag_data = this.general_patient_info['diagnosis'];
          let f_d : number[] = [];
          let l_d : string[] = [];
          diag_data.forEach(function (value,index) {
            f_d.push(value.frequency);
            l_d.push(value.name);
          });
          this.analysis_d_frequency=f_d;
          this.analysis_d_labels=l_d;

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
