import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {GrowlModule} from 'primeng/primeng';

import { HospitalsComponent } from './hospitals/hospitals.component';
import { AddHospitalComponent } from './hospitals/add/add.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { AddDiseaseComponent } from './diseases/add/add.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { AddMedicineComponent } from './medicines/add/add.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { AddInsuranceComponent } from './insurance/add/add.component';

// Routing Module
import { LocalizationRoutingModule } from './localization.routing';


@NgModule({
  imports: [
    CommonModule,
    GrowlModule,
    LocalizationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HospitalsComponent, AddHospitalComponent, DiseasesComponent,AddDiseaseComponent, MedicinesComponent,AddMedicineComponent, InsuranceComponent,AddInsuranceComponent]
})
export class LocalizationModule { }
