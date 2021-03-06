import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoadingSheetComponent} from './loading-sheet.component';

const routes: Routes = [
    {
        path: '',
        data: {breadcrumb: 'Loading Sheet'},
        component: LoadingSheetComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoadingSheetRoutingModule {
}
