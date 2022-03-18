import { Board } from './board.model';
import { createReducer, on } from '@ngrx/store'
import * as BoardActions from './board.actions'
import alveusBoard from '../../assets/board/alveus.json'
import desktopBoard from '../../assets/board/desktop.json'

export const initialState: Board = {
    tiles: alveusBoard,
    bingo: false,
    goForBlackout: false
}

export const boardReducer = createReducer(
    initialState,
    on(BoardActions.bingo, state => ({...state, bingo: true})),
    on(BoardActions.goForBlackout, state => ({...state, goForBlackout: true}))
)