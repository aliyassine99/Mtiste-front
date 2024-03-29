import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './views/layout/layout.module';
import { AuthGuard } from './core/guard/auth.guard';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { PatientsComponent } from './patients/patients.component';
import { EditPatientComponent } from './patients/edit-patient/edit-patient.component';
import { ListePatientsComponent } from './patients/liste-patients/liste-patients.component';

//wizard form
import { ArchwizardModule } from 'angular-archwizard';
import {DropdownModule} from 'primeng/dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { CalendarModule } from 'primeng/calendar';


import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';







import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ToastModule } from "primeng/toast";
import { ButtonModule } from "primeng/button";
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationComponent } from './reservation/reservation.component';
import { EditReservationComponent } from './reservation/edit-reservation/edit-reservation.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { EditRendezVousComponent } from './rendez-vous/edit-rendez-vous/edit-rendez-vous.component';
import { ListeRendezVousComponent } from './rendez-vous/liste-rendez-vous/liste-rendez-vous.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { EditConsultationComponent } from './consultation/edit-consultation/edit-consultation.component';
import { ListeConsultationComponent } from './consultation/liste-consultation/liste-consultation.component';
import { OrdonnanceComponent } from './ordonnance/ordonnance.component';
import { EditOrdonnanceComponent } from './ordonnance/edit-ordonnance/edit-ordonnance.component';
import { ListeOrdonnanceComponent } from './ordonnance/liste-ordonnance/liste-ordonnance.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


//modal

import { DialogModule } from 'primeng/dialog';
import { JwtService } from 'interceptors/jwt';
import { TableRdvComponent } from './rendez-vous/table-rdv/table-rdv.component';
import { FactureComponent } from './facture/facture.component';
import { ListeFacturesComponent } from './facture/liste-factures/liste-factures.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



import {RippleModule} from 'primeng/ripple';




FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
])
@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    PatientsComponent,
    EditPatientComponent,
    ListePatientsComponent,
    ReservationComponent,
    EditReservationComponent,
    RendezVousComponent,
    EditRendezVousComponent,
    ListeRendezVousComponent,
    ConsultationComponent,
    EditConsultationComponent,
    ListeConsultationComponent,
    OrdonnanceComponent,
    EditOrdonnanceComponent,
    ListeOrdonnanceComponent,
    TableRdvComponent,
    FactureComponent,
    ListeFacturesComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DialogModule,
    ReactiveFormsModule,
    ArchwizardModule,
    LayoutModule,
    ButtonModule,
    ConfirmDialogModule,
    MessagesModule,
    NgbModule,
    NgSelectModule,
    FullCalendarModule,
    CalendarModule,
    Ng2SearchPipeModule,
    SweetAlert2Module,
    ToastModule,
    RippleModule



  ],
  providers: [
{provide: HTTP_INTERCEPTORS,useClass: JwtService, multi: true},
    {

      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
