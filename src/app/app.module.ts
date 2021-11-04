import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { SongComponent } from './song/song.component';
import { SongscontainerComponent } from './songscontainer/songscontainer.component';
import { CaratulaComponent } from './caratula/caratula.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    SongComponent,
    SongscontainerComponent,
    CaratulaComponent,
    
  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
