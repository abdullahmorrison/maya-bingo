import { createReducer, on } from '@ngrx/store'

import { Board } from './board.model';
import * as BoardActions from './board.actions'

import alveusBoard from '../../assets/board/alveus.json'
import desktopBoard from '../../assets/board/desktop.json'

export const initialState: Board = {
    type: 'Alveus',
    tiles: alveusBoard.tiles,
    bingo: false,
    goForBlackout: false
}

export const boardReducer = createReducer(
    initialState,
    on(BoardActions.bingo, state => ({...state, bingo: true})),
    on(BoardActions.addChip, (state, {index}) => 
        ({...state, 
            tiles: [
                ...state.tiles.slice(0, index), 
                {...state.tiles[index], clicked: true}, 
                ...state.tiles.slice(index + 1)
            ]
        })
    ),
    on(BoardActions.removeChip, (state, {index}) => 
        ({...state, 
            tiles: [
                ...state.tiles.slice(0, index), 
                {...state.tiles[index], clicked: false}, 
                ...state.tiles.slice(index + 1)
            ]
        })
    ),
    on(BoardActions.goForBlackout, state => ({...state, goForBlackout: true})),
    on(BoardActions.switchBoard, state => 
        ({...state, 
            type: state.type == "Alveus" ? "Desktop" : "Alveus", 
            tiles: state.type == 'Alveus'? desktopBoard.tiles : alveusBoard.tiles
        })),
    on(BoardActions.newGame, state =>
        ({...state, 
            bingo: false, 
            goForBlackout: false,
            tiles: state.type == 'Alveus'? alveusBoard.tiles : desktopBoard.tiles
        })),
)