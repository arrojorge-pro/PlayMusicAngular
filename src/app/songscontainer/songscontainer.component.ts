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
      (new SongComponent("Pokusone","Collocutor",2019,"Kaleidoscpe","Jazz","assets/music/1/kaleidoscope.jpg",1,1,"assets/music/1/pokusone.mp3")),
      (new SongComponent("All you need is love","Beattles",1996,"Smooth Jazz","Jazz","assets/music/2/beattles.jpg",2,2,"assets/music/2/allYouNeedIsLove.mp3")),
      (new SongComponent("Thriller","Michael Jackson",1989,"Smooth Jazz","Jazz","assets/music/3/jackson.jpg",3,3,"assets/music/3/thriller.mp3")),
      (new SongComponent("Bohemian Rapsody","Queen",1981,"The Songs Of Queen","Jazz","assets/music/4/queen.jpg",4,4,"assets/music/4/bohemian.mp3")),
      
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
