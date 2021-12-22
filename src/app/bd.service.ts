import { Injectable } from '@angular/core';
import { getDatabase, ref, set } from "firebase/database";
import canciones from './dataSongs/DataSongs';

@Injectable({
  providedIn: 'root'
})
export class BdService {

  constructor() { }

  setdata(){
    function writeUserData() {
      const db = getDatabase();
      set(ref(db, 'canciones/'),
      canciones);
    }
    writeUserData();
  }
}
