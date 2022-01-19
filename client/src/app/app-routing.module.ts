import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargeConnectorComponent } from './charge-connector/charge-connector.component';
import { ChargingpointComponent } from './chargingpoint/chargingpoint.component';
import { NetworkComponent } from './network/network.component';
import { RfidComponent } from './rfid/rfid.component';

const routes: Routes = [
  { path: '', redirectTo: '/rfid', pathMatch:'full'},
  { path: 'rfid', component: RfidComponent},
  { path: 'network', component: NetworkComponent},
  { path: 'chargingpoint', component: ChargingpointComponent},
  { path: 'chargeconnector', component: ChargeConnectorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
