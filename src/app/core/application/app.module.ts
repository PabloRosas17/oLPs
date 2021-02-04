import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { AppComponent } from '../application/app.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BlogComponent } from '../../components/blog/blog.component';
import { EmailService } from '../services/emailservice';
import { AppRoutingModule } from '../routing/app-routing.module';
import { DashboardComponent } from '../authenticated/dashboard/dashboard.component';
import { FireAuthService } from '../fireauth/FireAuthService';
import { KeepHtmlPipe } from '../../shared/pipes/keep-html.pipe';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SwiftTruckSnackbarComponent } from '../../layout/snackbar/swift-truck-snackbar/swift-truck-snackbar.component';
import { AuthGuard } from '../fireauth/auth.guard';
import { ProjectsDirective } from '../../modules/dynamic/projects/projects.directive';
import { ProjectsBannerComponent } from '../../modules/dynamic/projects/projects-banner/projects-banner.component';
import { ProjectsService } from '../services/projects.service';
import { SwifttruckMapsComponent } from '../../modules/dynamic/projects/swift-truck-dynamic-modules/swifttruck-maps/swifttruck-maps.component';
import { SwifttruckOrdersComponent } from '../../modules/dynamic/projects/swift-truck-dynamic-modules/swifttruck-orders/swifttruck-orders.component';
import { SwifttruckPaymentsComponent } from '../../modules/dynamic/projects/swift-truck-dynamic-modules/swifttruck-payments/swifttruck-payments.component';
import { SwifttruckMediaComponent } from '../../modules/dynamic/projects/swift-truck-dynamic-modules/swifttruck-media/swifttruck-media.component';
import { SwifttruckRegistrationComponent } from '../../modules/dynamic/projects/swift-truck-dynamic-modules/swifttruck-registration/swifttruck-registration.component';
import { SwifttruckBroadcastingComponent } from '../../modules/dynamic/projects/swift-truck-dynamic-modules/swifttruck-broadcasting/swifttruck-broadcasting.component';
import { FrontComponent } from '../../components/front/front.component';
import { NavbarComponent } from '../../layout/external/navbar/navbar.component';
import { INavbarComponent } from '../../layout/internal/navbar/inavbar.component';
import { FooterComponent } from '../../layout/external/footer/footer.component';
import { PortalComponent } from '../../modules/authorized/portal/portal.component';
import { EmailSnackbarComponent } from 'src/app/layout/snackbar/email-snackbar/layout/snackbar/email-snackbar/email-snackbar/email-snackbar.component';
import { ErrorSnackbarComponent } from 'src/app/layout/snackbar/error-snackbar/error-snackbar/error-snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    PortalComponent,
    DashboardComponent,
    KeepHtmlPipe,
    SwiftTruckSnackbarComponent,
    EmailSnackbarComponent,
    ErrorSnackbarComponent,
    ProjectsDirective,
    SwifttruckRegistrationComponent,
    SwifttruckBroadcastingComponent,
    ProjectsBannerComponent,
    SwifttruckMapsComponent,
    SwifttruckOrdersComponent,
    SwifttruckPaymentsComponent,
    SwifttruckMediaComponent,
    FrontComponent,
    NavbarComponent,
    INavbarComponent,
    FooterComponent
  ],
  imports: [
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatTabsModule,
    MatSnackBarModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatRadioModule,
    AgmCoreModule.forRoot({
      apiKey: environment.agmConfig.apiKey
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig, 'olps-firebase'),
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    NoopAnimationsModule
  ],
  exports: [
    KeepHtmlPipe
  ],
  entryComponents: [
    SwiftTruckSnackbarComponent,
    SwifttruckRegistrationComponent,
    SwifttruckBroadcastingComponent,
    SwifttruckMapsComponent,
    SwifttruckOrdersComponent,
    SwifttruckPaymentsComponent,
    SwifttruckMediaComponent
  ],
  providers: [
    ProjectsService,
    EmailService,
    FireAuthService, AuthGuard, AngularFirestore,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(db: AngularFireDatabase
            , firestore: AngularFirestore
            , firestoreage: AngularFireStorage
            , auth: AngularFireAuth) { }
}
