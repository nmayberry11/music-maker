import { Subject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class MyMusicService {
  // Subjects
  globalMusicUpdated = new Subject();

  // DATA
  private myMusicArray = [
    { id: 1, title: "Beat It", artist: "MJ", genre: "Pop" },
    {
      id: 2,
      title: "Welcome to the Black Parade",
      artist: "My Chemical Romance",
      genre: "Rock"
    },
    {
      id: 3,
      title: "Paint it Black",
      artist: "Rolling Stones",
      genre: "Classic Rock"
    }
  ];

  // SAVE Music (Single)
  saveSong(song) {
    this.myMusicArray.push(song);

    this.globalMusicUpdated.next(this.myMusicArray.slice());

    return true;
  }

  // GET Music (Single)

  // GET Musics (All)
  getAllSongs() {
    return this.myMusicArray.slice();
  }

  // UPDATE Music (Single)

  // DELETE Music (Single)
  removeSong(id: number) {
    this.myMusicArray = this.myMusicArray
      .slice()
      .filter(song => song.id !== id);

    this.globalMusicUpdated.next(this.myMusicArray.slice());

    return true;
  }
}
