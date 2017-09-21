import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsComponent } from './patients.component';
import { SearchComponent } from './search/search.component';
import { AddPatientComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: PatientsComponent,
    data: {
      title: 'Patients List'
    },
    children: []
  },
  {
    path: 'search',
    component: SearchComponent,
    data: {
      title: 'Search Patient'
    }
  },
  {
    path: 'add',
    component: AddPatientComponent,
    data: {
      title: 'Add Patient'
    }
  },
  {
    path: 'view/:id/:authorization_code',
    component: ViewComponent,
    data: {
      title: "View Patient"
    }
  },
  {
    path: 'checkout/:id/:authorization_code',
    loadChildren: './checkout/checkout.module#CheckoutModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule {}
