import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiseasesComponent } from './diseases/diseases.component';
import { AddDiseaseComponent } from './diseases/add/add.component';
import { HospitalsComponent} from './hospitals/hospitals.component';
import { AddHospitalComponent} from './hospitals/add/add.component';
import { MedicinesComponent} from './medicines/medicines.component';
import { AddMedicineComponent} from './medicines/add/add.component';
import { InsuranceComponent} from './insurance/insurance.component';
import { AddInsuranceComponent} from './insurance/add/add.component';

const routes: Routes = [
  {
    path: 'diseases',
    component: DiseasesComponent,
    data: {
      title: 'Diseases'
    }
  },
  {
    path: 'diseases/add',
    component: AddDiseaseComponent,
    data: {
      title: 'Add Disease'
    }
  },
  {
    path: 'medicines',
    component: MedicinesComponent,
    data: {
      title: 'Medicines'
    }
  },
  {
    path: 'medicines/add',
    component: AddMedicineComponent,
    data: {
      title: 'Add Medicine'
    }
  },
  {
    path: 'hospitals',
    component: HospitalsComponent,
    data: {
      title: 'Hospitals'
    }
  },
  {
    path: 'hospitals/add',
    component: AddHospitalComponent,
    data: {
      title: 'Add Hospital'
    }
  },
  {
    path: 'medicines',
    component: MedicinesComponent,
    data: {
      title: 'Medicines'
    }
  },
  {
    path: 'medicines/add',
    component: AddMedicineComponent,
    data: {
      title: 'Add Medicine'
    }
  },
  {
    path: 'insurance',
    component: InsuranceComponent,
    data: {
      title: 'Insurance'
    }
  },
  {
    path: 'insurance/add',
    component: AddInsuranceComponent,
    data: {
      title: 'Add Insurance'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalizationRoutingModule {}
