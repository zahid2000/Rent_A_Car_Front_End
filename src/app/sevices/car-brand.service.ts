import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarBrand } from '../models/carBrand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarBrandService {

apiUrl = "https://localhost:44362/api/";
  constructor(private httpClient:HttpClient) { }

  getCarBrand():Observable<ListResponseModel<CarBrand>>
  {
    let newPath=this.apiUrl+"carbrands/getall"
return this.httpClient.get<ListResponseModel<CarBrand>>(newPath)
  }



}
