import { Component, OnInit } from '@angular/core';
import { CarBrand } from 'src/app/models/carBrand';
import { CarBrandService } from 'src/app/sevices/car-brand.service';
import { CarService } from 'src/app/sevices/car.service';

@Component({
  selector: 'app-car-brand',
  templateUrl: './car-brand.component.html',
  styleUrls: ['./car-brand.component.css'],
})
export class CarBrandComponent implements OnInit {
  carBrands: CarBrand[] = [];
  currentBrand: CarBrand;
  constructor(private carBrandService: CarBrandService) {}

  ngOnInit(): void {
    this.getCarBrand();
  }

  getCarBrand() {
    this.carBrandService.getCarBrand().subscribe((response) => {
      this.carBrands = response.data;
    });
  }

  setCurrentBrand(brand:CarBrand){
    this.currentBrand=brand;
  }
  getCurrentBrandClass(brand:CarBrand){
    if(brand==this.currentBrand){
      return "list-group-item active";
    }else{
      return "list-group-item ";
    }
  }
}
