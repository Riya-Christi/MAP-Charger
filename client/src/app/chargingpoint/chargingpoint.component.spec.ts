import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargingpointComponent } from './chargingpoint.component';

describe('ChargingpointComponent', () => {
  let component: ChargingpointComponent;
  let fixture: ComponentFixture<ChargingpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargingpointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargingpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
