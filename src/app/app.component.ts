import { Component, OnInit } from '@angular/core';
import { vehiclesService } from './services/vehicles.service';

import { VehicleInfo } from './classes/VehicleInfo';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public responseData1: any;
    public responseData2: any;
    public responseData3: any;
    public responseData4: any;
    public responseData5: any;

  constructor(private _vehiclesService: vehiclesService) { }

  lstvehicles: VehicleInfo[];

  ngOnInit() {
    this._vehiclesService.getVehicleName()
      .subscribe
      (
      data => {
        this.lstvehicles = data;
      },
      error => this.error = error
      );
  }

}


.next(() => lstvehicles.map((car: VehicleInfo )=> car.id))
.next((vehicleIds: string[]) =>  )