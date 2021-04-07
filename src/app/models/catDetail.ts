import { ResponseModel } from "./responseModel";

export  interface CarDetail  {
    carId:number;
    brandName:string;
    carName:string;
    modelYear:number;
    colorName:string;
    dailyPrice:number;
    imagePath:string[];
    
}