import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailDescriptor } from './emaildescriptor';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailSnackbarComponent } from 'src/app/layout/snackbar/email-snackbar/layout/snackbar/email-snackbar/email-snackbar/email-snackbar.component';
import { ErrorSnackbarComponent } from 'src/app/layout/snackbar/error-snackbar/error-snackbar/error-snackbar.component';

@Injectable()
export class EmailService {
    header: HttpHeaders;
    url: string;
    wrongs: any;

    data = {
        name: '',
        email: '',
    };

    constructor(private http: HttpClient) { }

    async fireContactEmailAsync(name: string, email: string, snackBar: MatSnackBar) {
        this.url = 'https://us-central1-olps-firebase.cloudfunctions.net/fxtest';
        this.header = new HttpHeaders();
        this.header.append('Content-Type', 'application/json');
        this.data.name = name;
        this.data.email = email;

        let promise = await this.http.post<EmailDescriptor>
            (this.url, this.data) // , { observe: 'response', headers: this.header })
        .toPromise().then(res => {
            snackBar.openFromComponent(EmailSnackbarComponent
                , { duration: 1.5 * 1000
                , verticalPosition: 'top'
                , horizontalPosition: 'center'
            });
        }).catch( error => {
            snackBar.openFromComponent(ErrorSnackbarComponent
                , { duration: 1.5 * 1000
                , verticalPosition: 'top'
                , horizontalPosition: 'center'
            });
        });
    }
}
