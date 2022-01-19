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

    var configData = this.config.getNetworkConfigData();
    // this.rfidConfig.patchValue({
    //       tag1: this.configData?.tag1,
    //       tag2: this.configData?.tag2,
    //       tag3: this.configData?.tag3,ss
    //       tag4: this.configData?.tag4,
    //       tag5: this.configData?.tag5,
    //     })
    console.log("get data", configData[1]);
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

