import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule} from  "@angular/forms";
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'


import { NaviComponent } from './components/navi/navi/navi.component';
import { CarComponent } from './components/car/car/car.component';
import { CarBrandComponent } from './components/carBrand/car-brand/car-brand.component';
import { CarImageComponent } from './components/carImage/car-image/car-image.component';
import { RentalComponent } from './components/rental/rental/rental.component';
import { CustomerComponent } from './components/customer/customer/customer.component';
import { CarColorComponent } from './components/carColor/car-color/car-color.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

import {ToastrModule} from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

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
    CarDetailComponent,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
