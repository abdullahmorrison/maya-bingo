import { Board } from './../../store/board/board.model';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as BoardActions from '../../store/board/board.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  bingo$ = this.store.select('board').pipe(map(board => board.bingo))

  constructor(private store: Store<{board: Board}>) { }

  ngOnInit(): void { }

  newGame(){
    this.store.dispatch(BoardActions.newGame())
  }
}
