import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { UserAccountApi,DiseaseApi } from '../../shared/sdk';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.scss'],
  providers: [UserAccountApi,DiseaseApi]
})
export class DiseasesComponent implements OnInit {

  disease_list:Object;
  constructor(private router: Router,protected user:UserAccountApi, protected disease:DiseaseApi ) {
    this.user.isAuthenticated()?false:this.router.navigate(['login']);
  }

  ngOnInit() {
    this.disease.find()
        .subscribe(res=>{
          this.disease_list = res;
        })
  }

}
