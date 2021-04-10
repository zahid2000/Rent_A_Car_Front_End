import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NaviComponent } from './components/navi/navi/navi.component';
import { CarComponent } from './components/car/car/car.component';
import { CarBrandComponent } from './components/carBrand/car-brand/car-brand.component';
import { CarImageComponent } from './components/carImage/car-image/car-image.component';
import { RentalComponent } from './components/rental/rental/rental.component';
import { CustomerComponent } from './components/customer/customer/customer.component';
import { CarColorComponent } from './components/carColor/car-color/car-color.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

@NgModule({
  declarations: [
    AppComponent,   
    NaviComponent,
    CarComponent,
    CarBrandComponent,
    CarImageComponent,
    RentalComponent,
    CustomerComponent,
    CarColorComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
