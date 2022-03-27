import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as BoardActions from '../../store/board/board.actions';

import alveusBoard from '../../assets/board/alveus.json'
import desktopBoard from '../../assets/board/desktop.json'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  boardData = alveusBoard

  board$: Observable<string>

  constructor(private store: Store<{board: string}>) { 
    this.board$ = this.store.select('board')
  }

  ngOnInit(): void { }

  bingo(){
    this.store.dispatch(BoardActions.bingo())
  }
  /**
   * @description Check if a row, column, or diagonal is filled with chips
   */
  checkBingo(chipsInARow: number) {
    let chips = 0
    //*Check horizontal win
    for (var i = 0; i < this.boardData.length; i+=chipsInARow) {
      for (var j = i; j < i+chipsInARow; j++) {
        //checking the row
        if (this.boardData[j].clicked == true) {
          chips++;
        }
      }
      if (chips == chipsInARow) {
        //checking for horizonal win
      }
      chips = 0;
    }
    //*Check vertical win
    for (i = 0; i < chipsInARow; i++) {
      for (j = i; j < this.boardData.length; j+=chipsInARow) {
        if (this.boardData[j].clicked == true) {
          chips++;
        }
      }
      if (chips == chipsInARow) {//checking for vertical win
        this.bingo()
      }
      chips = 0;
    }
    //*Check top-left to bottom-right diagonal win
    for (i = 0; i < this.boardData.length; i+=chipsInARow+1) {
      if (this.boardData[i].clicked == true) {
        chips++;
      }
    }
    if (chips == chipsInARow) {//checking for diagonal win
      this.bingo()
    }
    chips = 0;
    //*Check top-right to bottom-left diagonal win
    for (i = chipsInARow-1; i < this.boardData.length-1; i+=chipsInARow-1) {
      if (this.boardData[i].clicked == true) {
        
        chips++;
      }
    }
    if (chips == chipsInARow) {//checking for diagonal win
      this.bingo()
    }
    chips = 0;
  }
}
