import { Component, OnInit } from '@angular/core';
import alveusBoard from '../../assets/board/alveus.json'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  boardData = alveusBoard

  constructor() { }

  ngOnInit(): void {
  }

  onClick(tile: {title:string; imgSrc: string; imgAltText:string; clicked: boolean}){
    tile.clicked = !tile.clicked
  }
}
