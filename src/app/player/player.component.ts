import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../Song';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  
  @Input() cancion!:Song;

  music = new Audio;

  constructor() { }

  ngOnInit(): void {
  }

  play(){
    let url:string = this.cancion.url as string;
    this.music.src=url;
    this.music.play();
  }

  stop(){
    this.music.pause();
  }
}
