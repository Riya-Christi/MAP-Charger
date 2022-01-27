import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-chargingpoint',
  templateUrl: './chargingpoint.component.html',
  styleUrls: ['./chargingpoint.component.css']
})
export class ChargingpointComponent implements OnInit {

  configData: any;

  constructor( private config: ConfigService) {
    // this.config.getChargingpointData().subscribe((data)=>{
    //   this.configData = data;
    //   this.chargingpointConfig.patchValue({
    //     cp_modelname: this.configData?.cp_modelname,
    //     cp_srnumber: this.configData?.cp_srnumber,
    //     cp_vendor: this.configData?.cp_vendor,
    //     cp_lat: this.configData?.cp_lat,
    //     cp_long: this.configData?.cp_long,
    //     cp_fwver: this.configData?.cp_fwver,
    //     cp_url: this.configData?.cp_url,
    //     cp_connector: this.configData?.cp_connector,
    //     cp_rfid: this.configData?.cp_rfid
    //   })
    //   console.log(this.configData);
    // })

    var data = this.config.getChargingpointData();
    this.configData = data[2];

    this.chargingpointConfig.patchValue({
      cp_modelname: this.configData?.cp_modelname,
      cp_srnumber: this.configData?.cp_srnumber,
      cp_vendor: this.configData?.cp_vendor,
      cp_lat: this.configData?.cp_lat,
      cp_long: this.configData?.cp_long,
      cp_fwver: this.configData?.cp_fwver,
      cp_url: this.configData?.cp_url,
      cp_connector: this.configData?.cp_connector,
      cp_rfid: this.configData?.cp_rfid
    })
  }

  chargingpointConfig = new FormGroup({
    cp_modelname: new FormControl(''),
    cp_srnumber: new FormControl(''),
    cp_vendor: new FormControl(''),
    cp_lat: new FormControl(''),
    cp_long: new FormControl(''),
    cp_fwver: new FormControl(''),
    cp_url: new FormControl(''),
    cp_connector: new FormControl(''),
    cp_rfid: new FormControl(''),
  })
  
  ngOnInit(): void {
    if(!this.config.webSocket){
      this.config.openWebSocket();
    }
  }
  SaveData(){
    // this.config.saveChargingpointData(this.chargingpointConfig.value).subscribe((result)=>{
    //   console.log(result);
    // });

    console.log(this.chargingpointConfig.value);
    this.config.sendData(this.chargingpointConfig.value)
    this.chargingpointConfig.reset();

  }

}
