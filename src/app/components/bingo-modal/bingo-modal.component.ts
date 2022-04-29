import { GoogleAnalyticsService } from './../../services/google-analytics.service';
import { Tile } from '../../../store/tile/tile.model';
import { Board } from '../../../store/board/board.model';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as BoardActions from '../../../store/board/board.actions';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bingo-modal',
  templateUrl: './bingo-modal.component.html',
  styleUrls: ['./bingo-modal.component.scss']
})
export class BingoModalComponent implements OnInit {
  bingo$: Observable<boolean>
  winningTiles$: Observable<Tile[]>
  goForBlackout$: Observable<boolean>
  googleAnalyticsService: GoogleAnalyticsService

  constructor(private store: Store<{ board: Board }>) {
    this.bingo$ = this.store.select('board').pipe(map(board => board.bingo))
    this.winningTiles$ = this.store.select('board').pipe(map(board => board.winningTiles))
    this.goForBlackout$ = this.store.select('board').pipe(map(board => board.goForBlackout))

    this.googleAnalyticsService = new GoogleAnalyticsService()
  }

  ngOnInit(): void { }

  newGame() {
    this.store.dispatch(BoardActions.newGame())
    this.trackGoogleAnalytics()
  }
  goForBlackout(){
    this.store.dispatch(BoardActions.goForBlackout())
  }
  trackGoogleAnalytics(): void{
    this.googleAnalyticsService.eventEmitter("new_game","bingo", "click")
  }
}
