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

  constructor() {
    
  
    // CaratulaComponent.cancion = SongscontainerComponent.getSelect();

   }

  ngOnInit(): void {
  }

  public getCancion(){
    return this.cancion;
  }

}
