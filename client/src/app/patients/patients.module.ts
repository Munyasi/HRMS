import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PatientsComponent } from './patients.component';
import { AddPatientComponent } from './add/add.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {GrowlModule} from 'primeng/primeng';
import { D3Service } from 'd3-ng2-service';

// Routing Module
import { PatientsRoutingModule } from './patients.routing';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    GrowlModule,
    ReactiveFormsModule,
    PatientsRoutingModule,
    TagInputModule,
    TabsModule.forRoot(),
  ],
  declarations: [PatientsComponent, AddPatientComponent, ViewComponent, SearchComponent],
  providers: [D3Service]
})
export class PatientsModule { }
