import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProprietairesComponent } from './proprietaires/proprietaires.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProprietaireListComponent } from './proprietaire-list/proprietaire-list.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProprietairesComponent,
    ProprietaireListComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModalModule,
    FlatpickrModule,
    CommonModule,
    FormsModule,
   
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
