import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RfidComponent } from './rfid/rfid.component';
import { NetworkComponent } from './network/network.component';
import { ChargingpointComponent } from './chargingpoint/chargingpoint.component';
import { ChargeConnectorComponent } from './charge-connector/charge-connector.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    RfidComponent,
    NetworkComponent,
    ChargingpointComponent,
    ChargeConnectorComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
