import { Board } from '../../../store/board/board.model';
import { Store } from '@ngrx/store';
import * as BoardActions  from '../../../store/board/board.actions';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

  constructor(private store: Store<{board: Board}>) { }

  ngOnInit(): void { }

  handleNewGame() {
    this.store.dispatch(BoardActions.newGame())
  }
}
