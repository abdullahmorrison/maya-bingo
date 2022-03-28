import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//ngrx
import { StoreModule } from '@ngrx/store';
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
    ChipComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({board: boardReducer}),
    StoreDevtoolsModule.instrument({ logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
