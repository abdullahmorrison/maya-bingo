import { Tile } from './../tile/tile.model';
import { createAction, props } from "@ngrx/store";

export const bingo = createAction('[Board] Bingo', props<{ winningTiles: Tile[] }>());
export const newGame = createAction('[Board] New Game')

export const addChip = createAction('[Board] Add Chip', props<{ index: number }>())
export const removeChip = createAction('[Board] Remove Chip', props<{ index: number }>())

export const goForBlackout = createAction('[Board] Go For Blackout')
export const blackout = createAction('[Board] Blackout')
export const switchBoard = createAction('[Board] Switch Stream')