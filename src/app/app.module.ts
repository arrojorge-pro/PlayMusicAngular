import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { SongComponent } from './song/song.component';
import { SongscontainerComponent } from './songscontainer/songscontainer.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    SongComponent,
    SongscontainerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
