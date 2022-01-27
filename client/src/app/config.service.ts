import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  RfidURL = environment.RfidUrl; 
  NetworkURL = environment. NetworkUrl;
  ChargingpointURL = environment.ChargingpointUrl;
  ConnectorURL = environment.ConnectorUrl;
  webSocket!: WebSocket;
  fmdata: any[] = [];


  public openWebSocket(){
    this.webSocket = new WebSocket('ws://hitachi-ups.local:80/ws');
    this.webSocket.onopen = (event: any) => {
      console.log("open: ", event);
    };
    this.webSocket.onmessage = (event: any)=>{
      const data = JSON.parse(event.data);
      // console.log("on message data", event.data);
      // this.fmdata.length = 0;
      this.fmdata.push(data);
      console.log("frmdata", this.fmdata)
    }
    
  }
  public sendData(data: any){
    console.log("send data to server");
    this.webSocket.send(JSON.stringify(data));
    // this.webSocket.send('rfid',JSON.stringify(data))
    console.log(JSON.stringify(data));
  }

  constructor(private http: HttpClient) { }
  getRfidConfigData(){
    return this.fmdata;

  }

  getNetworkConfigData(){
    // return this.http.get(this.NetworkURL);
    return this.fmdata;
  }

  getChargingpointData(){
    return this.fmdata;
    // return this.http.get(this.ChargingpointURL);
  }

  getConnectorData(){
    return this.fmdata;
    // return this.http.get(this.ConnectorURL);
  }

  // saveRfidConfigData(data: { value: any; }){
  //   console.log(data);
  //   return this.http.post(this.RfidURL, data); 
  // }

}
