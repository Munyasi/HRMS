import { Component, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAccountApi, PatientApi,PatientHospitalApi } from '../../shared/sdk';
import {
    D3Service,
    D3,
    Axis,
    BrushBehavior,
    BrushSelection,
    D3BrushEvent,
    ScaleLinear,
    ScaleOrdinal,
    Selection,
    Transition
} from 'd3-ng2-service';

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
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };

    private d3: D3;
    private parentNativeElement: any;
    private d3Svg: Selection<SVGSVGElement, any, null, undefined>;

  public lineChartColours: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor(element: ElementRef, private ngZone: NgZone, d3Service: D3Service,private router: Router,private route: ActivatedRoute, protected user:UserAccountApi, protected patient: PatientApi, protected patientHospital:PatientHospitalApi) {
      this.d3 = d3Service.getD3();
      this.parentNativeElement = element.nativeElement;
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

          //doughnut pie
          let hospital_data = this.general_patient_info['facilities'];
          let f_h = [];
          let l_h = [];
          hospital_data.forEach(function (value,index) {
            f_h.push(value.frequency);
            l_h.push(value.name);
          });

          //doughnut pie
          let diagnosis_data = this.general_patient_info['diagnosis'];
          let f_d = [];
          let l_d = [];
          diagnosis_data.forEach(function (value,index) {
            f_d.push(value.frequency);
            l_d.push(value.name);
          });

          //doughnut pie
          let medication_data = this.general_patient_info['medication'];
          let f_m = [];
          let l_m = [];
          medication_data.forEach(function (value,index) {
            f_m.push(value.frequency);
            l_m.push(value.name);
          });

          // lineChart
          let lineChartData: Array<any> = [ {data: this.general_patient_info['analytics']['diagnosis_frequency'], label: 'Hospital Visits'},];
          let lineChartLabels: Array<any> = this.general_patient_info['analytics']['months'];

          this.analytics={line_chart:{lineChartData:lineChartData,lineChartLabels:lineChartLabels},hospital:{labels:l_h,frequency:f_h},diagnosis:{labels:l_d,frequency:f_d},medication:{labels:l_m,frequency:f_m}}
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
