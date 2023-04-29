import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IProperty } from '../property/IProperty.interface';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) { }
getAllHouses() : Observable<IProperty[]>{
  return this.http.get('data/properties.json').pipe(
    map(data =>{
      const propertiesArray : Array<IProperty> =[];
      for(const id in data){
        if(data.hasOwnProperty(id))
        propertiesArray.push(data[id]);
       // propertiesArray.push(data[id as keyof typeof data])
      }
      return propertiesArray;
    })
  )
}
}
