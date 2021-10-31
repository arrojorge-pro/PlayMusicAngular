import { Component, OnInit, Output } from '@angular/core';
import { Song } from '../Song';
import { SongComponent } from '../song/song.component';

@Component({
  selector: 'app-songscontainer',
  templateUrl: './songscontainer.component.html',
  styleUrls: ['./songscontainer.component.css']
})
export class SongscontainerComponent implements OnInit {

  @Output() songs!:Song[];
  selectSong!:Song;
  flagList!:Boolean;

  constructor() { 
    this.songs =[
      (new SongComponent("mi carro","manolo",1956,"disco","estilo","caratula",1,1)),
      (new SongComponent("mi carro2","manolo2",19562,"disco2","estilo2","caratula2",12,12))
      
  ];
    this.flagList = false;

  }

  ngOnInit(): void {
   
   
  }

  public detalle(){
    alert("hola");
  }



  onItemSelector(value :any) {
    console.log(value);
    
    }

    public getSelectSong(value :any, value2:any){
      
        this.songs.forEach(song => {
          if(song.numDisco==value && song.numCancion==value2){
            this.selectSong = song;
            this.flagList=true;
          }
        });
      
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
