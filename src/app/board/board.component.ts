import { Component, OnInit } from '@angular/core';
import { Board } from './../../store/board/board.model';
import { Tile } from './../../store/tile/tile.model';

import { Store } from '@ngrx/store';
import { Observable, throttleTime } from 'rxjs';
import { map } from 'rxjs/operators';
import * as BoardActions from '../../store/board/board.actions';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  board$: Observable<Tile[]>

  constructor(private store: Store<{board: Board}>) { 
    this.board$ = this.store.select('board').pipe(
      throttleTime(1), //throttled to avoid infinite loop when dispatching a bingo
      map((board: Board) => board.tiles)
    )

    this.board$.subscribe({
      next: tiles => {
        let chipsNeeded = 5 //number of chips needed in a row, columd or diagonal to win

        let chips = 0 // current number of chips
        //Check horizontal win
        for (var i = 0; i < tiles.length; i+=chipsNeeded) {
          for (var j = i; j < i+chipsNeeded; j++) {
            if (tiles[j].clicked == true) {
              chips++
            }
          }
          if (chips == chipsNeeded) {
            this.bingo()
          }
          chips = 0
        }
        //Check vertical win
        for (i = 0; i < chipsNeeded; i++) {
          for (j = i; j < tiles.length; j+=chipsNeeded) {
            if (tiles[j].clicked == true) {
              chips++
            }
          }
          if (chips == chipsNeeded) {
            this.bingo()
          }
          chips = 0
        }
        //Check top-left to bottom-right diagonal win
        for (i = 0; i < tiles.length; i+=chipsNeeded+1) {
          if (tiles[i].clicked == true) {
            chips++
          }
        }
        if (chips == chipsNeeded) {
          this.bingo()
        }
        chips = 0
        //Check top-right to bottom-left diagonal win
        for (i = chipsNeeded-1; i < tiles.length-1; i+=chipsNeeded-1) {
          if (tiles[i].clicked == true) {
            
            chips++
          }
        }
        if (chips == chipsNeeded) {
          this.bingo()
        }
        chips = 0
      }
    })
  }

  ngOnInit(): void { }

  bingo(): void{ 
    this.store.dispatch(BoardActions.bingo())
  }
}
