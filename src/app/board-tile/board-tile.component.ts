import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-tile',
  templateUrl: './board-tile.component.html',
  styleUrls: ['./board-tile.component.scss']
})
export class BoardTileComponent implements OnInit {
  @Input() imgSrc: string
  @Input() imgAltText: string
  @Input() title: string

  constructor() { 
    this.imgSrc = ""
    this.imgAltText = "No Image"
    this.title = "No Title"
  }

  ngOnInit(): void {
  }

}
