import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarColor } from 'src/app/models/carColor';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CarColorService } from 'src/app/sevices/car-color.service';

@Component({
  selector: 'app-car-color',
  templateUrl: './car-color.component.html',
  styleUrls: ['./car-color.component.css']
})
export class CarColorComponent implements OnInit {
carColors:CarColor[]=[];
  constructor(private carColorService:CarColorService) { }

  ngOnInit(): void {
    this.getCarColor();
  }

  getCarColor(){
 this.carColorService.getCarColor().subscribe(response=>{
  this.carColors=response.data;
})
  }
}
