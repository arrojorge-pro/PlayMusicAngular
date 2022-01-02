import { Pipe, PipeTransform } from '@angular/core';
import { getDatabase, ref, get, child, set} from "firebase/database";
import { Observable } from 'rxjs';

@Pipe({
  name: 'filter'
})


export class FilterPipe implements PipeTransform {

  items: Observable<any[]> | undefined;
  item: Observable<any> | undefined;
  constructor() {}


  transform(value: any, searchValue:any): any {

      if (!searchValue) return value;

      return value.filter((v:any)  =>{

      if(v.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1){
        return v.title;
      }
      if (v.artis.toLowerCase().indexOf(searchValue.toLowerCase()) > -1){
        return v.artis;
      }

    }
    )
  }
}
