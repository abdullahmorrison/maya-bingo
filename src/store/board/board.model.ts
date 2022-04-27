import { Tile } from '../tile/tile.model';

export interface Board {
    type: "Alveus" | "Desktop"
    tiles: Tile[]
    bingo: boolean,
    winningTiles: Tile[],
    goForBlackout: boolean
}