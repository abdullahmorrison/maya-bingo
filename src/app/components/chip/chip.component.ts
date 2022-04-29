import { Store } from '@ngrx/store';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Board } from '../../../store/board/board.model';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {
  boardType: Observable<"Alveus" | "Desktop">
  chipImage: string 
  altText: string 

  constructor(private store: Store<{board: Board}>) { 
    //Switching the chip logo and alt text based on the board type
    this.boardType = this.store.select('board').pipe(map(board => board.type))
    this.chipImage = ""
    this.altText = ""

    this.boardType.subscribe(type => {
      if (type == "Alveus") {
        this.chipImage = "../../assets/chip/alveus.svg"
        this.altText = "mayahiHappy Emote"
      } else {
        this.chipImage = "../../assets/chip/desktop.svg"
        this.altText = "mayahiCozy Emote"
      }
    })
  }
  ngOnInit(): void { }
}