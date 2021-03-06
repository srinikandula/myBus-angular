import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DueReportsComponent} from './due-reports.component';
import {OfficeDueReportComponent} from './office-due-report/office-due-report.component';
import {OfficeDueReportByDateComponent} from './office-due-report-by-date/office-due-report-by-date.component';
import {OfficeDueReportByServiceComponent} from './office-due-report-by-service/office-due-report-by-service.component';
import {OfficeDueReportByAgentComponent} from './office-due-report-by-agent/office-due-report-by-agent.component';

const routes: Routes = [
  {
    path: '',
    data: {breadcrumb: 'Due Reports'},
    component: DueReportsComponent
  },
  {
    path: 'officeDueReport/:id',
    data: {breadcrumb: 'Office Due Report'},
    component: OfficeDueReportComponent
  },
  {
    path: 'officeDueReport/:id/officeDueReportByDate/:date',
    data: {breadcrumb: 'Office Due Report By Date'},
    component: OfficeDueReportByDateComponent
  },
  {
    path: 'officeDueReport/:id/officeDueReportByService/:service',
    data: {breadcrumb: 'Office Due Report By Service'},
    component: OfficeDueReportByServiceComponent
  },
  {
    path: 'officeDueReport/:id/officeDueReportByAgent/:agentName',
    data: {breadcrumb: 'Office Due Report By Agent'},
    component: OfficeDueReportByAgentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DueReportsRoutingModule { }
