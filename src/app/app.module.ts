import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovaKomponentaComponent } from './nova-komponenta/nova-komponenta.component';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { HttpClientModule } from '@angular/common/http';
import { DrzaveComponent } from './drzave/drzave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetaljiComponent } from './detalji/detalji.component';

@NgModule({
  declarations: [
    AppComponent,
    NovaKomponentaComponent,
    NavigacijaComponent,
    DrzaveComponent,
    DetaljiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
