import { createAction } from "@ngrx/store";

export const bingo = createAction('[Board] Bingo')
export const newGame = createAction('[Board] New Game')
export const goForBlackout = createAction('[Board] Go For Blackout')
export const switchBoard = createAction('[Board] Switch Stream')