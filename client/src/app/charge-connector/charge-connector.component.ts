import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-charge-connector',
  templateUrl: './charge-connector.component.html',
  styleUrls: ['./charge-connector.component.css']
})
export class ChargeConnectorComponent implements OnInit {
  configData: any;

  constructor( private config: ConfigService) { 

    this.config.getConnectorData().subscribe((data)=>{
      this.configData = data;
      this.connectorConfig.patchValue({
        C1_status: this.configData?.C1_status,
        C1_type: this.configData?.C1_type,
        C1_id: this.configData?.C1_id,
        C1_interface: this.configData?.C1_interface,

        C2_status: this.configData?.C2_status,
        C2_type: this.configData?.C2_type,
        C2_id: this.configData?.C2_id,
        C2_interface: this.configData?.C2_interface,

        C3_status: this.configData?.C3_status,
        C3_type: this.configData?.C3_type,
        C3_id: this.configData?.C3_id,
        C3_interface: this.configData?.C3_interface,

        C4_status: this.configData?.C4_status,
        C4_type: this.configData?.C4_type,
        C4_id: this.configData?.C4_id,
        C4_interface: this.configData?.C4_interface,

        C5_status: this.configData?.C5_status,
        C5_type: this.configData?.C5_type,
        C5_id: this.configData?.C5_id,
        C5_interface: this.configData?.C5_interface,

        C6_status: this.configData?.C6_status,
        C6_type: this.configData?.C6_type,
        C6_id: this.configData?.C6_id,
        C6_interface: this.configData?.C6_interface,

        C7_status: this.configData?.C7_status,
        C7_type: this.configData?.C7_type,
        C7_id: this.configData?.C7_id,
        C7_interface: this.configData?.C7_interface,

        C8_status: this.configData?.C8_status,
        C8_type: this.configData?.C8_type,
        C8_id: this.configData?.C8_id,
        C8_interface: this.configData?.C8_interface,

        C9_status: this.configData?.C9_status,
        C9_type: this.configData?.C9_type,
        C9_id: this.configData?.C9_id,
        C9_interface: this.configData?.C9_interface,
      })
      console.log(this.configData)
    })

    // var configData = this.config.getConnectorData();
    // console.log("get data", configData[3]);
  }

connectorConfig= new FormGroup({
  C1_status: new FormControl(''),
  C1_type: new FormControl(''),
  C1_id: new FormControl(''),
  C1_interface: new FormControl(''),

  C2_status: new FormControl(''),
  C2_type: new FormControl(''),
  C2_id: new FormControl(''),
  C2_interface: new FormControl(''),

  C3_status: new FormControl(''),
  C3_type: new FormControl(''),
  C3_id: new FormControl(''),
  C3_interface: new FormControl(''),

  C4_status: new FormControl(''),
  C4_type: new FormControl(''),
  C4_id: new FormControl(''),
  C4_interface: new FormControl(''),

  C5_status: new FormControl(''),
  C5_type: new FormControl(''),
  C5_id: new FormControl(''),
  C5_interface: new FormControl(''),

  C6_status: new FormControl(''),
  C6_type: new FormControl(''),
  C6_id: new FormControl(''),
  C6_interface: new FormControl(''),

  C7_status: new FormControl(''),
  C7_type: new FormControl(''),
  C7_id: new FormControl(''),
  C7_interface: new FormControl(''),

  C8_status: new FormControl(''),
  C8_type: new FormControl(''),
  C8_id: new FormControl(''),
  C8_interface: new FormControl(''),

  C9_status: new FormControl(''),
  C9_type: new FormControl(''),
  C9_id: new FormControl(''),
  C9_interface: new FormControl(''),
})

  ngOnInit(): void {
  }

  SaveData(){
    // this.config.saveConnectorConfigData(this.connectorConfig.value).subscribe((result)=>{
    //   console.log(result);
    // });

    console.log(this.connectorConfig.value);
    this.config.sendData(this.connectorConfig.value)
    this.connectorConfig.reset(); 
    }
}
