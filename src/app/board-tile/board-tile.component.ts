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
  @Input() clicked: boolean

  constructor() { 
    this.imgSrc = ""
    this.imgAltText = "No Image"
    this.title = "No Title"
    this.clicked = false
  }

  ngOnInit(): void {
  }
  
  handleClick(){
    this.clicked = !this.clicked 
  }
}
