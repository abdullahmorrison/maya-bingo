import { GoogleAnalyticsService } from './../../services/google-analytics.service';
import { addChip, removeChip } from '../../../store/board/board.actions';
import { Board } from '../../../store/board/board.model';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-tile',
  templateUrl: './board-tile.component.html',
  styleUrls: ['./board-tile.component.scss']
})
export class BoardTileComponent implements OnInit {
  @Input() index: number

  @Input() imgSrc: string
  @Input() imgAltText: string
  @Input() title: string
  @Input() clicked: boolean

  googleAnalyticsService: GoogleAnalyticsService

  constructor(private store: Store<{board: Board}>) { 
    this.index = -1 // for ngrx to find which tile is clicked to add a chip

    this.imgSrc = ""
    this.imgAltText = "No Image"
    this.title = "No Title"
    this.clicked = false

    this.googleAnalyticsService = new GoogleAnalyticsService()
  }

  ngOnInit(): void { }
  
  handleClick(){
    if(!this.clicked){
      this.store.dispatch(addChip({index: this.index}))
      this.trackGoogleAnalytics("add")
    }else{
      this.store.dispatch(removeChip({index: this.index}))
      this.trackGoogleAnalytics("remove")
    }
  }
  trackGoogleAnalytics(addOrRemove: "add" | "remove"): void{
    this.googleAnalyticsService.eventEmitter(addOrRemove+"_chip","bingo", "click")
  }
}
