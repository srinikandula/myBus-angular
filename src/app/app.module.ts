import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalModule} from 'ngb-modal';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './main/authentication/login/login.component';
import {CookieService} from 'ngx-cookie-service';
import {JwtInterceptor} from './interceptors/jwt.interceptor';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {ErrorInterceptor} from './interceptors/error.interceptor';
import {SpinnerService} from './spinner/spinner.service';
import {SpinnerInterceptor} from './interceptors/spinner.interceptor';
import {SpinnerComponent} from './spinner/spinner.component';
import {BsDatepickerModule, DatepickerModule} from 'ngx-bootstrap/datepicker';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFileUploaderModule} from 'angular-file-uploader';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SpinnerComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule,
        HttpClientModule,
        AngularFileUploaderModule,
        // NoopAnimationsModule,
        BsDatepickerModule.forRoot(),
        DatepickerModule.forRoot(),
    ],
    providers: [
        CookieService,
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
        SpinnerService,
        {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true},
    ],
    exports: [
        SpinnerComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
