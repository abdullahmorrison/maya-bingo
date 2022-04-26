import { Board } from './../store/board/board.model';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//ngrx
import { StoreModule, MetaReducer, Action, ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { boardReducer } from 'src/store/board/board.reducers';
//devtools
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

//components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DescriptionComponent } from './description/description.component';
import { BoardComponent } from './board/board.component';
import { SwitchComponent } from './switch/switch.component';
import { NewGameComponent } from './new-game/new-game.component';
import { FooterComponent } from './footer/footer.component';
import { BoardTileComponent } from './board-tile/board-tile.component';
import { ChipComponent } from './chip/chip.component';
import { ModalComponent } from './modal/modal.component';

export function storageMetaReducer(reducer: ActionReducer<any>) {
  return function (state: Board, action: Action) {
    let nextState = reducer(state, action)

    // if a user is visiting the site for the first time (no local storage)
    if (localStorage.length == 0) {
      //save initial state
      localStorage.setItem('Bingo', JSON.stringify(nextState.board.bingo))
      localStorage.setItem('Board Type', JSON.stringify(nextState.board.type))
      localStorage.setItem('Alveus Board', JSON.stringify(nextState.board.tiles))
      localStorage.setItem('Go For Blackout', JSON.stringify(nextState.board.goForBlackout))
      return nextState
    }

    const boardType = localStorage.getItem('Board Type')
    const alveusBoard = localStorage.getItem('Alveus Board')
    const desktopBoard = localStorage.getItem('Desktop Board')
    const alveusGoForBlackout = localStorage.getItem('Alveus Go For Blackout')
    const desktopGoForBlackout = localStorage.getItem('Desktop Go For Blackout')

    switch (action.type) {
      case INIT: //if the page is refreshed
        if (boardType) {
          if (JSON.parse(boardType) == 'Desktop' && desktopBoard) {
            nextState.board.tiles = JSON.parse(desktopBoard)
            // page colors for desktop stream
            document.documentElement.style.setProperty('--primary-color', '#ff9bd7')
            document.documentElement.style.setProperty('--secondary-color', '#fff6fe')
            document.documentElement.style.setProperty('--tertiary-color', '#ffd1ed')
            document.documentElement.style.setProperty('--hover-color', '#fbdcf8')
          } else if (JSON.parse(boardType) == 'Alveus' && alveusBoard) {
            nextState.board.tiles = JSON.parse(alveusBoard)
          }
        }
        break

      case '[Board] Add Chip' || '[Board] Remove Chip':
        if (boardType) {
          if (JSON.parse(boardType) == 'Alveus') {
            if (alveusBoard)
              nextState = { ...JSON.parse(alveusBoard), ...nextState }
            localStorage.setItem('Alveus Board', JSON.stringify(nextState.board.tiles))
          } else if (JSON.parse(boardType) == 'Desktop') {
            if (desktopBoard)
              nextState = { ...JSON.parse(desktopBoard), ...nextState }
            localStorage.setItem('Desktop Board', JSON.stringify(nextState.board.tiles))
          }
        }
        break
    }
    return nextState
  }
}

export const metaReducers: MetaReducer<any>[] = [storageMetaReducer];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DescriptionComponent,
    BoardComponent,
    SwitchComponent,
    NewGameComponent,
    FooterComponent,
    BoardTileComponent,
    ChipComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ board: boardReducer }, { metaReducers }),
    StoreDevtoolsModule.instrument({ logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
