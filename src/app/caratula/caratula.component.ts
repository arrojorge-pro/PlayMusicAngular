import { Component, Input, OnInit } from '@angular/core';
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
  // Guardar datos al presionar el botón del formulario
  onSubmit(event:any){
    let numCancion = event.target.numCancion.value
    let title = event.target.title.value;
    let artis = event.target.artis.value;
    let disco = event.target.disco.value
    let anio = event.target.anio.value
    let estilo = event.target.estilo.value


    const tutRef = this.db.doc('canciones/'+numCancion);


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
