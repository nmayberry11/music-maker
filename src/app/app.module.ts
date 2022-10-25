import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AddSongComponent } from './add-song/add-song.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeContainerComponent } from './landing/home-container/home-container.component';
import { MusicSearchComponent } from './music-search/music-search.component';
import { MyMusicComponent } from './my-music/my-music.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SongComponent } from './shared/song/song.component';
import { SortArrayPipe } from './shared/SortArray.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeContainerComponent,
    MyMusicComponent,
    MusicSearchComponent,
    SongComponent,
    SortArrayPipe,
    AddSongComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
