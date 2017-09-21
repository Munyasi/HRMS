import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { UserAccountApi,MedicineApi } from '../../shared/sdk';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.scss'],
  providers: [UserAccountApi,MedicineApi]
})
export class MedicinesComponent implements OnInit {

  medicine_list:Object;
  constructor(private router: Router,protected user:UserAccountApi, protected medicine:MedicineApi ) {
    this.user.isAuthenticated()?false:this.router.navigate(['login']);
  }

  ngOnInit() {
    this.medicine.find()
        .subscribe(res=>{
          this.medicine_list = res;
        })
  }

}
