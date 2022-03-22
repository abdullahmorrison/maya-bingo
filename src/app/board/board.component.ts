import { Component, OnInit } from '@angular/core';
import alveusBoard from '../../assets/board/alveus.json'
// import desktopBoard from '../../assets/board/desktop.json'

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
}
