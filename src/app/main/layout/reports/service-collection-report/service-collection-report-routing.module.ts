import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServiceCollectionReportComponent} from './service-collection-report.component';

const routes: Routes = [
  {
    path: '',
    data: {breadcrumb: 'Service Collection Report'},
    component: ServiceCollectionReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceCollectionReportRoutingModule { }
