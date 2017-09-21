import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { UserAccountApi, DiseaseApi } from '../../../shared/sdk';

@Component({
  selector: 'app-add-disease',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [UserAccountApi,DiseaseApi]
})
export class AddDiseaseComponent implements OnInit {
  diseaseForm: FormGroup;
  post: any;
  constructor(private fb: FormBuilder, private router: Router, protected user:UserAccountApi, protected disease: DiseaseApi) {
    this.user.isAuthenticated()?false:this.router.navigate(['login']);
    this.diseaseForm = fb.group({
      'name' : [null, Validators.required],
      'description' : [null],
    });
  }

  ngOnInit() {
  }

  submit(post) {
    if (this.diseaseForm.valid) {
      this.disease.create(post)
          .subscribe(res => {
            this.router.navigate(['localization/diseases']);
          });
    }
  }

}
