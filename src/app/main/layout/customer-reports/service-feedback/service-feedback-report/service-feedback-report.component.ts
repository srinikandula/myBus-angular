import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from '../../../../../services/api-service.service';
import {ApiUrls} from '../../../../../_helpers/apiUrls';
import {ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';
import {Location} from '@angular/common';

@Component({
    selector: 'app-service-feedback-report',
    templateUrl: './service-feedback-report.component.html',
    styleUrls: ['./service-feedback-report.component.css']
})
export class ServiceFeedbackReportComponent implements OnInit {
    public serviceId: any;
    public serviceFeedback: any = {};
    public errorMessage: any;
    public index: any;
    public errorCommentMessage: any;

    constructor(
        public apiService: ApiServiceService,
        private apiUrls: ApiUrls,
        private actRoute: ActivatedRoute,
        private location: Location
    ) {
        this.serviceId = this.actRoute.snapshot.params.id;
    }

    ngOnInit(): void {
        if (this.serviceId) {
            this.getAllServiceFeedback();
        }
    }

    public getAllServiceFeedback(): void {
        this.apiService.get(this.apiUrls.serviceFeedbackReports + this.serviceId).subscribe((res: any) => {
            if (res) {
                this.serviceFeedback = res;
                if (this.serviceFeedback.status === null) {
                    this.serviceFeedback.status = '';
                }
                for (const data of this.serviceFeedback.bookingFeedbacks) {
                    if (data.status === null) {
                        data.status = '';
                    }
                }
            }
        });
    }

    updateFeedbackStatus(): void {
        this.apiService.update(this.apiUrls.serviceFeedbackStatusUpdate +
            this.serviceId, {status: this.serviceFeedback.status}).subscribe((res: any) => {
            if (res) {
                this.serviceFeedback = res;
                Swal.fire('Great', 'Service feedback status is successfully updated', 'success');
            }
        }, error => {
            Swal.fire('Error', 'Service feedback status update failed', 'error');
        });
    }

    updateBookingFeedbackStatus(feedback: any, id: any, index: any): void {
        this.index = index;
        this.errorCommentMessage = '';
        this.errorMessage = '';
        if (feedback.status === null || feedback.status === '') {
            this.errorMessage = 'Please select Status';
        } else if (feedback.feedback === null || feedback.feedback === '') {
            this.errorCommentMessage = 'Please enter comment';
        } else {
            this.apiService.update(this.apiUrls.bookingFeedbackStatusUpdate + feedback.id,
                {
                    serviceFeedbackId: id,
                    status: feedback.status,
                    comment: feedback.feedback,
                    serviceReportId: feedback.serviceReportId,
                    jdate: this.serviceFeedback.jdate
                }).subscribe((res: any) => {
                Swal.fire('Great', 'Booking feedback status is successfully updated', 'success');
                if (res) {
                    this.serviceFeedback = res;
                    Swal.fire('Great', 'Booking feedback status is successfully updated', 'success');
                }
            }, error => {
                Swal.fire('Error', 'Booking feedback status update failed', 'error');
            });
        }
    }

    backToPrevious(): void {
        this.location.back();
    }

    sendWhatsAppMes(data: any): void {
        this.apiService.sendWhatsApp(data.phone, 'Thanks for travelling in Sri Krishna Travels');
    }
}