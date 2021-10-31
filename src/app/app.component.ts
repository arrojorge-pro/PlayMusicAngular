import { Component } from '@angular/core';
import { Song } from './Song';
import { SongscontainerComponent } from './songscontainer/songscontainer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spaworker';

  caratulaAhora!:String;

  constructor(){
    //si hay seleccionada una cancion en songs component entonces
    //guardar su carátula para enviarla al componente carátula
  }
}
