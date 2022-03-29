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

  handleClick(): void{
    //change the board data
    this.store.dispatch(BoardActions.switchBoard()) 

    //Change document colors
    let primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim()
    if(primaryColor == '#636A60'){
      document.documentElement.style.setProperty('--primary-color', '#FF9BD7');
      document.documentElement.style.setProperty('--secondary-color', '#FFF6FE');
      document.documentElement.style.setProperty('--tertiary-color', '#FFD1ED');
    }else{
      document.documentElement.style.setProperty('--primary-color', '#636A60');
      document.documentElement.style.setProperty('--secondary-color', '#F9EEE7');
      document.documentElement.style.setProperty('--tertiary-color', '#A8A8A8');
    }
  }
}