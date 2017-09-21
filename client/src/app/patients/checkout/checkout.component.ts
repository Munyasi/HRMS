import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import * as moment from 'moment';
import {Observable} from 'rxjs/Rx';

import { ActivatedRoute,Router } from '@angular/router';
import { UserAccountApi, PatientApi,HospitalApi,MedicineApi,DiseaseApi,Patient,PatientDiseaseApi,PatientHospitalApi,PatientMedicineApi } from '../../shared/sdk';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {forEach} from "@angular/router/src/utils/collection";
import {subscribeToResult} from "rxjs/util/subscribeToResult";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  providers: [UserAccountApi,PatientApi]
})
export class CheckoutComponent implements OnInit {

  post:any;
  patientCheckoutForm: FormGroup;
  patient_id:number;
  authorization_code: string;
  hospital_list: Object;
  disease_list: Object;
  medicine_list: Object;
  patient_info = {};
  hospital_id:number;
  diagnosis:any;
  medication:any;


  constructor(private fb: FormBuilder,private route: ActivatedRoute, private router: Router, protected user:UserAccountApi, protected patient: PatientApi, protected hospital: HospitalApi,protected medicine:MedicineApi,protected disease:DiseaseApi,protected patientDisease:PatientDiseaseApi,protected patientHospital:PatientHospitalApi,protected patientMedicine:PatientMedicineApi) {
    this.user.isAuthenticated()?false:this.router.navigate(['login']);

    this.patientCheckoutForm = fb.group({
      'first_name' : [null, Validators.required],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.patient_id = params['id'];
      this.authorization_code = params['authorization_code'];
    });

    this.patient.findOne({where:{id:this.patient_id,authorization_code:this.authorization_code}})
        .subscribe((res:Patient) =>{
          this.patient_info = res;
          this.patient_info['age'] = moment().diff(res.dob, 'years');
          this.getData();
        });

  }

  save(post){
      let patient_id = this.patient_id;
      let practitioner_id = this.user.getCurrentId();
      let code = "DG"+moment().unix();
      let auth_code = this.authorization_code;

      //Create hospital record
      let hospObject={patient_id:patient_id,hospital_id:post.hospital_id,diagnosis_code:code,practitioner_id:practitioner_id}


      //create disease record
      let dg = post.diagnosis;
      let dgObject=[];
      dg.forEach(function (value,index) { dgObject[index] = {diagnosis_code:code,patient_id:patient_id,disease_id:value.id,practitioner_id:practitioner_id}})


      //create medicine record
      let md = post.medication;
      let mdObject=[];
      md.forEach(function (value,index) { mdObject[index] = {diagnosis_code:code,patient_id:patient_id,medicine_id:value.id,practitioner_id:practitioner_id}})

      //persist data
      this.saveData(hospObject,dgObject,mdObject,auth_code,patient_id);
  }

  saveData(hospObject,dgObject,mdObject,auth_code,patient_id){
          this.patientHospital.create(hospObject).subscribe(res => {console.log(res)}),
          this.patientDisease.create(dgObject).subscribe(res => {console.log(res)}),
          this.patientMedicine.create(mdObject).subscribe(res => {console.log(res)})

          let url = 'patients/view/'+patient_id+'/'+auth_code;
          this.router.navigate([url]);
  }

  getData(){
    this.hospital.find()
        .subscribe(res =>{
          this.hospital_list = res;
        })
    this.disease.find()
        .subscribe(res =>{
          this.disease_list = res;
        })
    this.medicine.find()
        .subscribe(res =>{
          this.medicine_list = res;
        })
  }


}
