import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeConnectorComponent } from './charge-connector.component';

describe('ChargeConnectorComponent', () => {
  let component: ChargeConnectorComponent;
  let fixture: ComponentFixture<ChargeConnectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargeConnectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
