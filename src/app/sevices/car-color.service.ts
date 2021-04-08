import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarColor } from '../models/carColor';
import { CarDetail } from '../models/catDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarColorService {

  apiUrl = "https://localhost:44362/api/";
  constructor(private httpClient:HttpClient) {}
 
  getCarColor(): Observable<ListResponseModel<CarColor>> {
   let  newPath = this.apiUrl + "carcolors/getall";
    return this.httpClient.get<ListResponseModel<CarColor>>(newPath);
  }
 
}
