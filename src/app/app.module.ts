import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { vehiclesService } from './services/vehicles.service';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent ],
  providers: [vehiclesService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
