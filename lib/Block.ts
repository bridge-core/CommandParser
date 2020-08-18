import { isNullOrUndefined } from "util"
import { Coords } from "./Common"

export default class Block {
    private coords: Coords
    private identifier: string

    constructor( identifier: string, coords: Coords) {
        // if is undefined, use default value
        this.coords = coords
        this.identifier = identifier
    }
}