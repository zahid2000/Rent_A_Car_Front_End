import { Component, OnInit } from '@angular/core';
import { CarImage } from 'src/app/models/carImage';
import { CarImageDetail } from 'src/app/models/carImageDetail';
import { CarImageService } from 'src/app/sevices/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {
carImages:CarImage[]=[];
  constructor(private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.getCarImage()
  }
getCarImage(){
this.carImageService.getCarImage().subscribe(response=>{
  this.carImages=response.data;
})
}
}
