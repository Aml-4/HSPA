import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString:string,PropName:string): any[] {
    const resultArray =[];
    if(value.length ==0 || filterString =='' || PropName ==''){
      return value
    }
      for(let item of value){
        if(item[PropName] == filterString){
          resultArray.push(item)
        }
      }
    return resultArray;
  }

}
