import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { UserAccountApi,HospitalApi } from '../../shared/sdk';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss'],
  providers: [UserAccountApi,HospitalApi]
})
export class HospitalsComponent implements OnInit {

  hospital_list:Object;
  constructor(private router: Router,protected user:UserAccountApi, protected hospital:HospitalApi ) {
    this.user.isAuthenticated()?false:this.router.navigate(['login']);
  }

  ngOnInit() {
    this.hospital.find()
        .subscribe(res=>{
          this.hospital_list = res;
        })
  }

}
