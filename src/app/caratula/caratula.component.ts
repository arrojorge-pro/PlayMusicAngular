import { Component, Input, OnInit } from '@angular/core';
import { getDatabase, ref, set } from "firebase/database";
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-caratula',
  templateUrl: './caratula.component.html',
  styleUrls: ['./caratula.component.css']
})
export class CaratulaComponent implements OnInit {

 @Input() cancion!:any;

  constructor(private db: AngularFirestore) {


    // CaratulaComponent.cancion = SongscontainerComponent.getSelect();

   }

  ngOnInit(): void {

  }

  public getCancion(){
    return this.cancion;
  }

  saveChanges(){

  }

  onSubmit(event:any){
    console.log( event.target.artis.value)

    let numCancion = event.target.numCancion.value
    let title = event.target.title.value;
    let artis = event.target.artis.value;
    let disco = event.target.disco.value
    let anio = event.target.anio.value
    let estilo = event.target.estilo.value

    // function writeUserData(numCancion:number, title:string, artis:string, disco:string, anio:number, estilo:string) {
    //   const db = getDatabase();
    //   set(ref(db, 'canciones/' + numCancion), {
    //     anio: anio,
    //     artis: artis,
    //     disco : disco,
    //     estilo: estilo,
    //     numCancion: numCancion,
    //     title: title,
    //   });
    // }
    // writeUserData(numCancion,title,artis,disco,anio,estilo);

    const tutRef = this.db.doc('canciones/'+numCancion);

    // set() for destructive updates
    tutRef.update({
          anio: anio,
          artis: artis,
          disco : disco,
          estilo: estilo,
          numCancion: numCancion,
          title: title,
    });


  }

}
