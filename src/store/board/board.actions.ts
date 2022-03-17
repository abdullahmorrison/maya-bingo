import { createAction } from "@ngrx/store";

export const addChip = createAction('[Board Tile] Add Chip')
export const removeChip = createAction('[Board Tile] Remove Chip')

export const bingo = createAction('[Board] Bingo')

export const newGame = createAction('[New Game Button] New Game')

export const goForBlackout = createAction('[Modal] Go For Blackout')
export const switchStream = createAction('[Switch] Switch Stream')