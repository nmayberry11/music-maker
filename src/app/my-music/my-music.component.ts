import { Component, OnInit } from '@angular/core';

import { MyMusicService } from './my-music.service';

@Component({
  selector: "app-my-music",
  templateUrl: "./my-music.component.html",
  styleUrls: ["./my-music.component.css"]
})
export class MyMusicComponent implements OnInit {
  sortBy = "title";
  myMusic = [];

  constructor(private myMusicService: MyMusicService) {}

  ngOnInit(): void {
    this.myMusic = this.myMusicService.getAllSongs();

    this.myMusicService.globalMusicUpdated.subscribe((newSongs: any) => {
      this.myMusic = newSongs;
    });
  }

  onToggleSortBy() {
    this.sortBy === "title"
      ? (this.sortBy = "artist")
      : (this.sortBy = "title");
  }

  onRemoveTrack(id: number) {
    this.myMusicService.removeSong(id);
  }
}
