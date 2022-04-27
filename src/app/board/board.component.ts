import { Component, OnInit } from '@angular/core';
import { Board } from './../../store/board/board.model';
import { Tile } from './../../store/tile/tile.model';

import { Store } from '@ngrx/store';
import { Observable, windowCount } from 'rxjs';
import * as BoardActions from '../../store/board/board.actions';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  board$: Observable<Board>

  constructor(private store: Store<{ board: Board }>) {
    this.board$ = this.store.select('board')

    this.board$.subscribe({
      next: board => {
        if (!board.bingo) {
          this.checkBingo(board.tiles)
        }
      }
    })
  }

  ngOnInit(): void { }

  bingo(winningTiles: Tile[]): void {
    this.store.dispatch(BoardActions.bingo({ winningTiles }))
  }

  checkBingo(tiles: Tile[]): void {
    let chipsNeeded = 5 //number of chips needed in a row, column or diagonal to win
    this.checkRowBingo(tiles, chipsNeeded)
    this.checkColumnBingo(tiles, chipsNeeded)
    this.checkDiagonalBingo(tiles, chipsNeeded)
  }

  checkRowBingo(tiles: Tile[], chipsNeeded: number): void {
    let chips = 0
    let winningTiles: Tile[] = []
    //Check horizontal win
    for (let i = 0; i < tiles.length; i += chipsNeeded) {
      for (let j = i; j < i + chipsNeeded; j++) {
        if (tiles[j].clicked == true) {
          winningTiles.push(tiles[j])
          chips++
        }
      }
      if (chips == chipsNeeded) {
        this.bingo(winningTiles)
      }
      winningTiles = []
      chips = 0
    }
  }

  checkColumnBingo(tiles: Tile[], chipsNeeded: number): void {
    let chips = 0
    let winningTiles: Tile[] = []
    //Check vertical win
    for (let i = 0; i < chipsNeeded; i++) {
      for (let j = i; j < tiles.length; j += chipsNeeded) {
        if (tiles[j].clicked == true) {
          winningTiles.push(tiles[j])
          chips++
        }
      }
      if (chips == chipsNeeded) {
        this.bingo(winningTiles)
      }
      winningTiles = []
      chips = 0
    }
  }

  checkDiagonalBingo(tiles: Tile[], chipsNeeded: number): void {
    let chips = 0
    let winningTiles: Tile[] = []
    //Check top-left to bottom-right diagonal win
    for (let i = 0; i < tiles.length; i += chipsNeeded + 1) {
      if (tiles[i].clicked == true) {
        winningTiles.push(tiles[i])
        chips++
      }
    }
    if (chips == chipsNeeded) {
      this.bingo(winningTiles)
    }
    winningTiles = []
    chips = 0
    //Check top-right to bottom-left diagonal win
    for (let i = chipsNeeded - 1; i < tiles.length - 1; i += chipsNeeded - 1) {
      if (tiles[i].clicked == true) {
        winningTiles.push(tiles[i])
        chips++
      }
    }
    if (chips == chipsNeeded) {
      this.bingo(winningTiles)
    }
    winningTiles = []
    chips = 0
  }
}
