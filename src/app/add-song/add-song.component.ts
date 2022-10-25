import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MyMusicService } from '../my-music/my-music.service';

@Component({
  selector: "app-add-song",
  templateUrl: "./add-song.component.html",
  styleUrls: ["./add-song.component.css"]
})
export class AddSongComponent implements OnInit {
  addSongForm: FormGroup;

  constructor(private myMusicService: MyMusicService) {}

  ngOnInit(): void {
    this.addSongForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      artist: new FormControl(null, Validators.required),
      genre: new FormControl(null, Validators.required)
    });
  }

  onAddSong() {
    // destructure data from value object
    const { title, artist, genre } = this.addSongForm.value;

    // create new song

    // add to myMusic Array
    this.myMusicService.saveSong({ title, artist, genre });

    this.addSongForm.reset();
  }
}
