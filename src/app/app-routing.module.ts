import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddSongComponent } from './add-song/add-song.component';
import { HomeContainerComponent } from './landing/home-container/home-container.component';
import { MusicSearchComponent } from './music-search/music-search.component';
import { MyMusicComponent } from './my-music/my-music.component';

const routes: Routes = [
  { path: "", component: HomeContainerComponent },
  { path: "my-music", component: MyMusicComponent },
  { path: "add-song", component: AddSongComponent },
  { path: "music-search", component: MusicSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
