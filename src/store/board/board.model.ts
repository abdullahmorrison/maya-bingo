import { Tile } from '../tile/tile.model';

export interface Board{ 
    tiles: Tile[]
    bingo: boolean
    goForBlackout: boolean 
}