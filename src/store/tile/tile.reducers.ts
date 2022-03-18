import { createReducer, on } from '@ngrx/store';
import { Tile } from "./tile.model";
import * as tileActions from './tile.actions'

export const initialState: Tile = {
    title: "",
    imgSrc: "",
    imgAltText: "",
    clicked: false
}

export const tileReducer = createReducer(
    initialState,
    on(tileActions.addChip, state => ({...state, clicked: true})),
    on(tileActions.removeChip, state => ({...state, clicked: false}))
)