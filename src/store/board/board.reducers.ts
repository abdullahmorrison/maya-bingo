import { Board } from './board.model';
import { createReducer, on } from '@ngrx/store'
import * as BoardActions from './board.actions'

export const initialState: Board = {
    tiles: [],
    bingo: false,
    goForBlackout: false
}

export const boardReducer = createReducer(
    initialState,
    on(BoardActions.bingo, state => ({...state, bingo: true}))
)