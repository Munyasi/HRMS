import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts/accounts.component';
import { AddAccountComponent } from './accounts/add/add.component';

// Routing Module
import { ExtrasRoutingModule } from './extras.routing';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ExtrasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AccountsComponent, AddAccountComponent]
})
export class ExtrasModule { }
