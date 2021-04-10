import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/catDetail';
import { CarService } from 'src/app/sevices/car.service';
import { CartService } from 'src/app/sevices/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService:CartService
  ) {}
  carDetails: CarDetail[] = [];
  dataLoaded: boolean = false;
  filterText = '';
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['colorId'] && params['brandId']) {
        this.getCarByColorIdAndBrandId(params['colorId'], params['brandId']);
      } else if (params['brandId']) {
        this.getCarByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarByColorId(params['colorId']);
      } else {
        this.getCarDetail();
      }
      if (params['carId']) {
        this.getCarDetailByCarId(params['carId']);
      }
    });
  }

  getCarDetail() {
    this.carService.getCarDetail().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }
  getCarByColorIdAndBrandId(colorId: number, brandId: number) {
    this.carService
      .getCarByColorIdAndBrandId(colorId, brandId)
      .subscribe((response) => {
        this.carDetails = response.data;
        this.dataLoaded = true;
      });
  }
  getCarByColorId(colorId: number) {
    this.carService.getCarByColorId(colorId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }
  getCarByBrandId(brandId: number) {
    this.carService.getCarByBrandId(brandId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }
  carDetail: CarDetail[] = [];
  getCarDetailByCarId(carid: number) {
    this.carService.getCarDetailByCarId(carid).subscribe((response) => {
      this.carDetail = response.data;
    });
  }

  addToCart(car: CarDetail) {
    this.cartService.addToCart(car);
    this.toastrService.success('Kiralandi', car.carName);
  }
}
