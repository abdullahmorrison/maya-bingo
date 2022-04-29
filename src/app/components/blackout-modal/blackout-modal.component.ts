import { GoogleAnalyticsService } from './../../services/google-analytics.service';
import { Observable } from 'rxjs';
import { Board } from '../../../store/board/board.model';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as BoardActions from '../../../store/board/board.actions';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blackout-modal',
  templateUrl: './blackout-modal.component.html',
  styleUrls: ['./blackout-modal.component.scss']
})
export class BlackoutModalComponent implements OnInit {
  blackout$: Observable<boolean>
  googleAnalyticsService: GoogleAnalyticsService

  constructor(private store: Store<{ board: Board}>) { 
    this.blackout$ = store.select('board').pipe(map(board => board.blackout))
    this.googleAnalyticsService = new GoogleAnalyticsService()
  }

  ngOnInit(): void { }

  newGame() {
    this.store.dispatch(BoardActions.newGame())
    this.trackGoogleAnalytics()
  }
  trackGoogleAnalytics(): void{
    this.googleAnalyticsService.eventEmitter("new_game","bingo", "click")
  }
}
