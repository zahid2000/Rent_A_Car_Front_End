import { Injectable } from '@angular/core';
import { HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDetail } from '../models/catDetail';
@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = "https://localhost:44362/api/";
  constructor(private httpClient:HttpClient) {}
 
  getCar(): Observable<ListResponseModel<Car>> {
   let  newPath = this.apiUrl + "cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getcarDetail():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
