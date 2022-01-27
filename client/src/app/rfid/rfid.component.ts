import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-rfid',
  templateUrl: './rfid.component.html',
  styleUrls: ['./rfid.component.css']
})
export class RfidComponent implements OnInit {
  configData: any;

  constructor( private config: ConfigService) { 
   
    // this.config.getRfidConfigData().subscribe((data : any)=>{
    //   console.log("rfid data", data);
    //   // this.configData = data;
    //   this.configData = JSON.stringify(data);
    //   console.log("data" ,this.configData);
    //   this.rfidConfig.patchValue({
    //     tag1: this.configData?.tag1,
    //     tag2: this.configData?.tag2,
    //     tag3: this.configData?.tag3,
    //     tag4: this.configData?.tag4,
    //     tag5: this.configData?.tag5,
    //   })
    //   console.log(this.configData);
    // })
    var data = this.config.getRfidConfigData();
    this.configData = data[0];
    console.log("tag 1", this.configData?.tag1);
    
    this.rfidConfig.patchValue({
          tag1: this.configData?.tag1,
          tag2: this.configData?.tag2,
          tag3: this.configData?.tag3,
          tag4: this.configData?.tag4,
          tag5: this.configData?.tag5,
        })
    console.log("get data", this.configData);
  }

  rfidConfig = new FormGroup({
  tag1: new FormControl(''),
  tag2: new FormControl(''),
  tag3: new FormControl(''),
  tag4: new FormControl(''),
  tag5: new FormControl(''),
  });

  ngOnInit(): void {
    if(!this.config.webSocket){
      this.config.openWebSocket();
    }
  }

  SaveData(){
  console.log(this.rfidConfig.value);
  this.config.sendData(this.rfidConfig.value)
  // this.config.saveRfidConfigData(this.rfidConfig.value).subscribe((result)=>{
  // console.log(result);
  // });
  this.rfidConfig.reset();  
  }
}
