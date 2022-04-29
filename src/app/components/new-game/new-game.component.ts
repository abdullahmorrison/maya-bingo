import { GoogleAnalyticsService } from './../../services/google-analytics.service';
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
  googleAnalyticsService: GoogleAnalyticsService

  constructor(private store: Store<{board: Board}>) { 
    this.googleAnalyticsService = new GoogleAnalyticsService();
  }

  ngOnInit(): void { }

  handleNewGame() {
    this.trackGoogleAnalytics()
    this.store.dispatch(BoardActions.newGame())
  }
  trackGoogleAnalytics() {
    this.googleAnalyticsService.eventEmitter("new_game","bingo", "click")
  }
}
