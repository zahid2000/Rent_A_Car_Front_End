import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { RentalService } from 'src/app/sevices/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
rentalDetails:RentalDetail[]=[]
  constructor(private rentalservice:RentalService) { }

  ngOnInit(): void {
    this.getrentalDetail()
  }
getrentalDetail(){
  this.rentalservice.getRentalDetail().subscribe(response=>{
    this.rentalDetails=response.data;
  })
}
}
