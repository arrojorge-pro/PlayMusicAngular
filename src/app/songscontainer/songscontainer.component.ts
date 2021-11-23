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
    
    console.log(canciones);
    
    for (var _i = 0; _i < canciones.length; _i++) {
      console.log(_i);
      console.log(canciones[_i].title);
      console.log(canciones[_i].artis);
      console.log(canciones[_i].anio);
      console.log(canciones[_i].disco);
      console.log(canciones[_i].estilo);
      console.log(canciones[_i].caratula);
      console.log(canciones[_i].numdisco);
      console.log(canciones[_i].numCancion);
      console.log(canciones[_i].url);
      //this.songs[_i]= new SongComponent(canciones[_i].title,canciones[_i].artis,canciones[_i].anio,canciones[_i].disco,canciones[_i].estilo,canciones[_i].caratula,canciones[_i].numdisco,canciones[_i].numCancion,canciones[_i].url);
    }
    
    this.songs= [
      (new SongComponent(canciones[0].title,canciones[0].artis,canciones[0].anio,canciones[0].disco,canciones[0].estilo,canciones[0].caratula,canciones[0].numdisco,canciones[0].numCancion,canciones[0].url)),
      (new SongComponent(canciones[1].title,canciones[1].artis,canciones[1].anio,canciones[1].disco,canciones[1].estilo,canciones[1].caratula,canciones[1].numdisco,canciones[1].numCancion,canciones[1].url)),
      (new SongComponent(canciones[2].title,canciones[2].artis,canciones[2].anio,canciones[2].disco,canciones[2].estilo,canciones[2].caratula,canciones[2].numdisco,canciones[2].numCancion,canciones[2].url)),
      (new SongComponent(canciones[3].title,canciones[3].artis,canciones[3].anio,canciones[3].disco,canciones[3].estilo,canciones[3].caratula,canciones[3].numdisco,canciones[3].numCancion,canciones[3].url))
      ];

    canciones.forEach(cancion => {
      //this.songs=[new SongComponent(cancion.title,cancion.artis,cancion.anio,cancion.disco,cancion.estilo,cancion.caratula,cancion.numdisco,cancion.numCancion,cancion.url)];
    });

    // let temp!:Song[];
    // canciones.forEach(function (cancion){
    //  temp.push (new SongComponent(cancion.title,cancion.artis,cancion.anio,cancion.disco,cancion.estilo,cancion.caratula,cancion.numdisco,cancion.numCancion,cancion.url));
    // });

    // this.songs = temp;
  //   this.songs =[

      

      

     
  //     // (new SongComponent("Pokusone","Collocutor",2019,"Kaleidoscpe","Jazz","assets/music/1/kaleidoscope.jpg",1,1,"assets/music/1/pokusone.mp3")),
  //     // (new SongComponent("All you need is love","Beattles",1996,"Smooth Jazz","Jazz","assets/music/2/beattles.jpg",2,2,"assets/music/2/allYouNeedIsLove.mp3")),
  //     // (new SongComponent("Thriller","Michael Jackson",1989,"Smooth Jazz","Jazz","assets/music/3/jackson.jpg",3,3,"assets/music/3/thriller.mp3")),
  //     // (new SongComponent("Bohemian Rapsody","Queen",1981,"The Songs Of Queen","Jazz","assets/music/4/queen.jpg",4,4,"assets/music/4/bohemian.mp3")),
      
  // ];
    

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
