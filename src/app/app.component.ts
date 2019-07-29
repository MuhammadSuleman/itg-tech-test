import { Component, OnInit } from '@angular/core';
import { vehiclesService } from './services/vehicles.service';

import { VehicleInfo } from './classes/VehicleInfo';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _vehiclesService: vehiclesService) { };

  lstvehicles: VehicleInfo[];

  ngOnInit() {
    this._vehiclesService.getVehicleName()
      .subscribe(data => {
        this.lstvehicles = data;
        next(this.lstvehicles.forEach(element => {
          this._vehiclesService.getVehicleDescription(element.id)
            .subscribe(data => {
              element.description = data.description;
            })
        })
        )
        // error => this.error = error
      });
  }

}
