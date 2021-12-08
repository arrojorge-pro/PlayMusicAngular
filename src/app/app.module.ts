import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { SongComponent } from './song/song.component';
import { SongscontainerComponent } from './songscontainer/songscontainer.component';
import { CaratulaComponent } from './caratula/caratula.component';
import { FilterPipe } from './filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    SongComponent,
    SongscontainerComponent,
    CaratulaComponent,
    FilterPipe



  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    MatCardModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
