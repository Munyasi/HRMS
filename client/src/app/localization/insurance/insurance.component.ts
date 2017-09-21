import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { UserAccountApi,InsuranceApi } from '../../shared/sdk';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss'],
  providers: [UserAccountApi,InsuranceApi]
})
export class InsuranceComponent implements OnInit {

  insurance_list:Object;
  constructor(private router: Router,protected user:UserAccountApi, protected insurance:InsuranceApi ) {
    this.user.isAuthenticated()?false:this.router.navigate(['login']);
  }

  ngOnInit() {
    this.insurance.find()
        .subscribe(res=>{
          this.insurance_list = res;
        })
  }

}
