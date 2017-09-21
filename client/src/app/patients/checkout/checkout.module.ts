import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';


import { CheckoutComponent } from './checkout.component';

import {CheckoutRoutingModule} from './checkout.routing';

@NgModule({
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule
  ],
  declarations: [CheckoutComponent]
})
export class CheckoutModule { }
