import { Component, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { CaratulaComponent } from '../caratula/caratula.component';
import { Song } from '../Song';
import { SongComponent } from '../song/song.component';


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
    this.songs =[
      (new SongComponent("mi carro","manolo",1956,"disco","estilo","assets/img/id-1.png",1,1,"assets/music/1/pokusone.mp3")),
      (new SongComponent("mi carro2","manolo2",19562,"disco2","estilo2","assets/img/id-2.jpg",12,12,"assets/music/1/pokusone.mp3")),
      (new SongComponent("mi carro3","manolo3",1953,"disco3","estilo3","assets/img/id-3.jpg",33,33,"assets/music/1/pokusone.mp3")),
      (new SongComponent("mi carro4","manolo4",1954,"disco4","estilo4","assets/img/id-4.jpg",44,44,"assets/music/1/pokusone.mp3")),
      
  ];
    

  }

  ngOnInit(): void {
   
   
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
      console.log(SongscontainerComponent.flagList);
      return SongscontainerComponent.flagList;
      console.log(SongscontainerComponent.flagList);
    }

    getSelect():Song{
      return this.selectSong;
    }

  // public sendSong(num:Number){
  //   let boton = document.getElementById('detail');
  //   if (boton.value==num){

  //   }
  // }

  // public add (song:Song){
  //   this.songs.push(song);
  // }

  //Mostrar listado de canciones
  //Permitir selecionar cancion a reproducir


}
