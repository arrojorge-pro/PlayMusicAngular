import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../Song';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() cancion!:any;

  flag:boolean = false

  music = new Audio;

  constructor() { }

  ngOnInit(): void {
  }

  play(){


    let url:any = this.cancion.pipe().subscribe((val: any) => {
      this.music.src=(val[0].url);
      this.music.play().then(()=>{
        setInterval(()=>{
          if(this.music.ended) this.flag=false;
        },1000)
      });
    });


    if(url){
      this.flag = true;
    }



  }

  stop(){
    this.music.pause();
    this.flag = false;
  }
}
