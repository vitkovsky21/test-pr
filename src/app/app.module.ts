import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material/material.module';

import { ChartModule } from 'angular-highcharts';
import { ViewComponent } from './views/view/view.component';
import { SettingsComponent } from './views/settings/settings.component'
import { baseURL } from './shared/baseurl';
import { ChartsServiceService } from './services/charts-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewComponent,
    SettingsComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ChartModule,
    HttpClientModule,
    StoreModule.forRoot({}),
  ],
  providers: [ChartsServiceService, {provide: 'baseURL', useValue: baseURL}],
  bootstrap: [AppComponent]
})
export class AppModule { }
