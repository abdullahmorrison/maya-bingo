import { Action } from "@ngrx/store";
import { Board } from './board.model'

/**
Add Chip
Remove Chip
New Game 
Check Bingo
Go For Blackout
Switch Stream
**/

export enum BoardActionTypes {
    ADD_CHIP = '[BOARD] Add Chip',
    REMOVE_CHIP = '[BOARD] Remove Chip',
    NEW_GAME = '[BOARD] New Game',
    CHECK_BINGO = '[BOARD] Check Bingo',
    GO_FOR_BLACKOUT = '[BOARD] Go For Blackout',
    SWITCH_STREAM = '[BOARD] Switch Stream'
}
export class addChipAction implements Action {
    readonly type = BoardActionTypes.ADD_CHIP

    constructor(public payload: Board){}
}
export class removeChipAction implements Action {
    readonly type = BoardActionTypes.REMOVE_CHIP

    constructor(public payload: Board){}
}
//!Add rest of actions

export type BoardAction = addChipAction | removeChipAction