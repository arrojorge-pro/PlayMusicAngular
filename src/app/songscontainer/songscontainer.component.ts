import { Component, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { CaratulaComponent } from '../caratula/caratula.component';
import { Song } from '../Song';
import { SongComponent } from '../song/song.component';
import canciones from '../dataSongs/DataSongs';




@Component({
  selector: 'app-songscontainer',
  templateUrl: './songscontainer.component.html',
  styleUrls: ['./songscontainer.component.css']
})
export class SongscontainerComponent implements OnInit {

  @Output() songs!:Song[];
  @Output() selectSong!:Song;
  static flagList:Boolean = false;
  search = '';

  constructor() {
    this.songs= [
      (new SongComponent(canciones[0].title,canciones[0].artis,canciones[0].anio,canciones[0].disco,canciones[0].estilo,canciones[0].caratula,canciones[0].numdisco,canciones[0].numCancion,canciones[0].url)),
      (new SongComponent(canciones[1].title,canciones[1].artis,canciones[1].anio,canciones[1].disco,canciones[1].estilo,canciones[1].caratula,canciones[1].numdisco,canciones[1].numCancion,canciones[1].url)),
      (new SongComponent(canciones[2].title,canciones[2].artis,canciones[2].anio,canciones[2].disco,canciones[2].estilo,canciones[2].caratula,canciones[2].numdisco,canciones[2].numCancion,canciones[2].url)),
      (new SongComponent(canciones[3].title,canciones[3].artis,canciones[3].anio,canciones[3].disco,canciones[3].estilo,canciones[3].caratula,canciones[3].numdisco,canciones[3].numCancion,canciones[3].url))
      ];
  }

  ngOnInit(): void {
    this.selectSong = new SongComponent("","",0,"","","assets/img/without.png",0,0,"");

  }


  onItemSelector(value :any) {
    console.log(value);

    }

    public getSelectSong(value :any, value2:any){

      this.songs.forEach(song => {
        if(song.numDisco==value && song.numCancion==value2){
          this.selectSong = song;
          SongscontainerComponent.flagList=true;
        }
      });

    }

    flagList(){

      return SongscontainerComponent.flagList;

    }

    getSelect():Song{
      return this.selectSong;
    }



}
