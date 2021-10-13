import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import {VehiclesComponent} from './vehicles.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddEditVehicleComponent } from './add-edit-vehicle/add-edit-vehicle.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
      VehiclesComponent,
      AddEditVehicleComponent
  ],
    imports: [
        CommonModule,
        VehiclesRoutingModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        BsDatepickerModule
    ]
})
export class VehiclesModule { }