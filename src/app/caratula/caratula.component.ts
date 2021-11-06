import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../Song';
import { SongComponent } from '../song/song.component';
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
    this.cancion = new SongComponent("","",0,"","","assets/img/without.png",0,0);
  }

  public getCancion(){
    return this.cancion;
  }

}
