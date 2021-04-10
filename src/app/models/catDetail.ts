import { ResponseModel } from "./responseModel";

export  interface CarDetail  {
    carId:number;
    brandId:number;
    colorId:number;
    brandName:string;
    carName:string;
    modelYear:number;
    colorName:string;
    dailyPrice:number;
    description:string;
    imagePath:string[];
    
}