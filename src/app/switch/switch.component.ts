import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as BoardActions from '../../store/board/board.actions';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  constructor(private store: Store<{board: string}>) { }

  ngOnInit(): void { }

  handleClick(){
    this.store.dispatch(BoardActions.switchBoard()) 
  }
}
