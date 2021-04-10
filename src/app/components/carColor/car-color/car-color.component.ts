import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { CarColor } from 'src/app/models/carColor';
import { CarColorService } from 'src/app/sevices/car-color.service';

@Component({
  selector: 'app-car-color',
  templateUrl: './car-color.component.html',
  styleUrls: ['./car-color.component.css'],
})
export class CarColorComponent implements OnInit {
  carColors: CarColor[] = [];
  currentColor:CarColor;
  constructor(private carColorService: CarColorService) {}

  ngOnInit(): void {
    this.getCarColor();
  }

  getCarColor() {
    this.carColorService.getCarColor().subscribe((response) => {
      this.carColors = response.data;
    });
  }

  setCurrentColor(color:CarColor){
    this.currentColor=color;
  }
  getCurrentColorClass(color:CarColor){
    if(color==this.currentColor){
      return "list-group-item active";
    }else{
      return "list-group-item ";
    }
  }
}
