import { Store } from '@ngrx/store';

import { Board } from './../../store/board/board.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  boardType: Observable<"Alveus" | "Desktop">
  logo: string 
  altText: string 

  constructor(private store: Store<{board: Board}>) { 
    //Switching the nav logo and alt text based on the board type
    this.boardType = this.store.select('board').pipe(map(board => board.type))
    this.logo = ""
    this.altText = ""

    this.boardType.subscribe(type => {
      if (type == "Alveus") {
        this.logo = "../../assets/nav/alveus.svg"
        this.altText = "mayahi3 Emote"
      } else {
        this.logo = "../../assets/nav/desktop.svg"
        this.altText = "mayahiComfy Emote"
      }
    })
  }

  ngOnInit(): void { }
}
