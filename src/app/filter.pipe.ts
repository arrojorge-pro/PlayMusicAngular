import { Pipe, PipeTransform } from '@angular/core';
import { getDatabase, ref, get, child, set} from "firebase/database";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Pipe({
  name: 'filter'
})


export class FilterPipe implements PipeTransform {

  items: Observable<any[]> | undefined;
  item: Observable<any> | undefined;
  constructor(public firestore: AngularFirestore) {

  }


  transform(value: any, searchValue:any): any {
    //console.log(searchValue);
    //console.log(value);

      if (!searchValue) return value;

      return value.filter((v:any)  =>{

      //console.log(v.title);
      //console.log(searchValue);
      //console.log(v.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
      if(v.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1){
        return v.title;
      }
      if (v.artis.toLowerCase().indexOf(searchValue.toLowerCase()) > -1){
        return v.artis;
      }
      // ||   v.artis.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
      //console.log(this.valor);



  }
  )

  }


}
