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
    if(primaryColor == '#636a60'){
      document.documentElement.style.setProperty('--primary-color', '#ff9bd7');
      document.documentElement.style.setProperty('--secondary-color', '#fff6fe');
      document.documentElement.style.setProperty('--tertiary-color', '#ffd1ed');
    }else{
      document.documentElement.style.setProperty('--primary-color', '#636a60');
      document.documentElement.style.setProperty('--secondary-color', '#f9eee7');
      document.documentElement.style.setProperty('--tertiary-color', '#a8a8a8');
    }
  }
}