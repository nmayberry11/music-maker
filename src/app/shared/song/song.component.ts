import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "app-song",
  templateUrl: "./song.component.html",
  styleUrls: ["./song.component.css"]
})
export class SongComponent implements OnInit {
  @Input() abc;

  constructor() {}

  ngOnInit(): void {}
}
