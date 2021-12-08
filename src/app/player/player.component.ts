import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../Song';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() cancion!:Song;

  flag:boolean = false

  music = new Audio;

  constructor() { }

  ngOnInit(): void {
  }

  play(){

    let url:string = this.cancion.url as string;
    if(url){
      this.flag = true;
    }
    this.music.src=url;
    this.music.play().then(()=>{if(!this.music.ended){
      setInterval(()=>{
        if(this.music.ended) this.flag=false;
      },1000)
    }});

  }

  stop(){
    this.music.pause();
    this.flag = false;
  }
}
