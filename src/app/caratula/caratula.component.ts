import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../Song';
import { SongscontainerComponent } from '../songscontainer/songscontainer.component';

@Component({
  selector: 'app-caratula',
  templateUrl: './caratula.component.html',
  styleUrls: ['./caratula.component.css']
})
export class CaratulaComponent implements OnInit {

 @Input() cancion!:Song;
 static canc:Song;

  constructor() {
    
    // CaratulaComponent.cancion = SongscontainerComponent.getSelect();

   }

  ngOnInit(): void {
  }

  public setCancion(song:Song){
    this.cancion = song;
    if(CaratulaComponent.canc)
      console.log("ha pasado por canc notnull");
      this.cancion = CaratulaComponent.canc
  }

  public static setCancion2(song:Song){
    CaratulaComponent.canc = song;
  }

  public getCancion(){
    return this.cancion;
  }

}
