import { Injectable } from '@angular/core';
import * as alertyfy from 'alertifyjs'

@Injectable({
  providedIn: 'root'
})
export class AlertfiyService {

constructor() { }
success(message:any){
  alertyfy.success(message)
}
warnning(message:any){
  alertyfy.console.warn(message);
}
error(message:any){
  alertyfy.error(message)
}
}
