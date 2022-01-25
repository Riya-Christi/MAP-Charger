import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  configData: any;

  constructor( private config: ConfigService) {
    this.config.getNetworkConfigData().subscribe((data: any)=>{
      this.configData = data;
      console.log("data" ,this.configData);
      this.networkConfig.patchValue({
        i_type: this.configData?.i_type,
        ssid: this.configData?.ssid
      })
      console.log(this.configData);
    })
    // var configData = this.config.getNetworkConfigData();
    // console.log("get data", configData[1]);
  }  

  networkConfig = new FormGroup({
    i_type: new FormControl(''),
    ssid: new FormControl(''),
    pwd: new FormControl(''),
    security: new FormControl(''),
    apn: new FormControl(''),
    gsm_pass: new FormControl(''),
    gsm_type: new FormControl('')
  });

  ngOnInit(): void {
    this.config.webSocket;
    }
  
  SaveData(){
    console.log(this.networkConfig.value);
    this.config.sendData(this.networkConfig.value)
    // this.config.saveRfidConfigData(this.rfidConfig.value).subscribe((result)=>{
    // console.log(result);
    // });
    this.networkConfig.reset();  
    }

}  

