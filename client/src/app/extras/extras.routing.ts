import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsComponent } from './accounts/accounts.component';
import { AddAccountComponent} from './accounts/add/add.component';

const routes: Routes = [
  {
    path: 'accounts',
    component: AccountsComponent,
    data: {
      title: 'Accounts'
    }
  },
  {
    path: 'accounts/add',
    component: AddAccountComponent,
    data: {
      title: 'Add Account'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtrasRoutingModule {}
