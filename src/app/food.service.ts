import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ICurrentfoodData } from './icurrentfood-data';
import { environment } from 'src/environments/environment';
import { ICurrentfood } from './icurrentfood';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient: HttpClient) {

   }
   getCurrentFood(minCarbs: number , maxCarbs: number):
   Observable<ICurrentfood>{
     return this.httpClient.get<ICurrentfoodData>(
       `https://api.spoonacular.com/recipes/findByNutrients?minCarbs=${minCarbs}&maxCarbs=${maxCarbs}&apiKey=43ce002d744c44e99a74b1586e6a2d5e`
     ).pipe(map(data => this.transformToICurrentfood(data)))
   }
   private transformToICurrentfood(data: ICurrentfoodData): ICurrentfood {
     return { 
       
         
           name:data.title,
           calories:data.calories,
           image:`${data.image}`,
           protein:data.protein,
           fat:data.fat,
           carbs:data.carbs
         
       

       }
   }
}
