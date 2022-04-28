import { Tile } from './../../store/tile/tile.model';
import { Board } from './../../store/board/board.model';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as BoardActions from '../../store/board/board.actions';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  bingo$: Observable<boolean>
  winningTiles$: Observable<Tile[]>
  goForBlackout$: Observable<boolean>

  constructor(private store: Store<{ board: Board }>) {
    this.bingo$ = this.store.select('board').pipe(map(board => board.bingo))
    this.winningTiles$ = this.store.select('board').pipe(map(board => board.winningTiles))
    this.goForBlackout$ = this.store.select('board').pipe(map(board => board.goForBlackout))
  }

  ngOnInit(): void { }

  newGame() {
    this.store.dispatch(BoardActions.newGame())
  }
  goForBlackout(){
    this.store.dispatch(BoardActions.goForBlackout())
  }
}
