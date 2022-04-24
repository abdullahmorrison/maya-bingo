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
    if (action.type === INIT || action.type === UPDATE) {
      const storage = localStorage.getItem('__storage__')
      if (storage) {
        if (JSON.parse(storage).board.type == 'Desktop') {
          document.documentElement.style.setProperty('--primary-color', '#ff9bd7')
          document.documentElement.style.setProperty('--secondary-color', '#fff6fe')
          document.documentElement.style.setProperty('--tertiary-color', '#ffd1ed')
          document.documentElement.style.setProperty('--hover-color', '#fbdcf8')
        }
        return JSON.parse(storage)
      }
    }


    let nextState = reducer(state, action)
    const savedState = localStorage.getItem('__storage__')

    //merge savedState into nextState 
    if (savedState) {
      nextState = { ...JSON.parse(savedState), ...nextState }
    }
    localStorage.setItem('__storage__', JSON.stringify(nextState))
    return nextState;
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
