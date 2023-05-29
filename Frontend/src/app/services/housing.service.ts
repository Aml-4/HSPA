import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IProperty } from '../property/IProperty.interface';
import { IPropertyBase } from '../models/Ipropertybase';
import { property } from '../models/property';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) { }
getAllHouses(SellRent?:number) : Observable<property[]>{
  return this.http.get('data/properties.json').pipe(
    map((data :any) =>{
      const propertiesArray : Array<property> =[];
      const NewlyAddedProperties = JSON.parse(localStorage.getItem('newProp')||'{}')
      if(NewlyAddedProperties){
        for(const id in NewlyAddedProperties){
          if(SellRent){
          if(data.hasOwnProperty(id) && NewlyAddedProperties[id].SellRent ===SellRent )
          propertiesArray.push(NewlyAddedProperties[id]);
          }else{propertiesArray.push(NewlyAddedProperties[id]);}
         // propertiesArray.push(data[id as keyof typeof data])
        }
      }
      for(const id in data){
        if(SellRent){
        if(data.hasOwnProperty(id) && data[id].SellRent ===SellRent )
        propertiesArray.push(data[id]);
        }else{propertiesArray.push(data[id]);}
       // propertiesArray.push(data[id as keyof typeof data])
      }
      return propertiesArray;
    })
  )
}
getPropertyById(id :number){
  return this.getAllHouses().pipe(
    map(data => { return data.find(d => d.Id === id); })
  )
}

addProperty(Prop:property){
 //localStorage.setItem('newProp',JSON.stringify(Prop))
let Props=[];
if(localStorage.getItem('newProp')){
  Props =JSON.parse(localStorage.getItem('newProp')||'{}')
  Props=[...Props,Prop]
}else{
  Props=[Prop]
}
localStorage.setItem('newProp',JSON.stringify(Props))
}

newPropID(){
  if(localStorage.getItem('PID')){
    localStorage.setItem('PID',String(+localStorage.getItem('PID')+1))
    return +localStorage.getItem('PID');
  }else{
    localStorage.setItem('PID','101')
    return 101;
  }
}


}
