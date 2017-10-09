import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { UserAccountApi, MedicineApi } from '../../../shared/sdk';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [UserAccountApi,MedicineApi]
})
export class AddMedicineComponent implements OnInit {
  msgs: Message[] = [];
  medicineForm: FormGroup;
  post: any;
  constructor(private fb: FormBuilder, private router: Router, protected user:UserAccountApi, protected medicine: MedicineApi) {
    this.user.isAuthenticated()?false:this.router.navigate(['login']);
    this.medicineForm = fb.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  submit(post) {
    if (this.medicineForm.valid) {
      this.medicine.create(post)
          .subscribe(res => {
            this.showSuccess('Success','New medicine successfully added');
            this.medicineForm.reset();
            setTimeout(() =>{ this.router.navigate(['localization/medicines'])},3000);
          });
    }
  }

  showSuccess(summary,detail) {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:summary, detail:detail});
  }

}
