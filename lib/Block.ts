import { isNullOrUndefined } from "util"

export default class Block {
    private x: number
    private y: number
    private z: number
    private identifier: string

    constructor( identifier: string, x?: number, y?: number, z?: number ) {
        // if is undefined, use default value
        if ( isNullOrUndefined(x) ) this.x = 0
        else this.x = x
        if ( isNullOrUndefined(y) ) this.y = 64
        else this.y = y
        if ( isNullOrUndefined(z) ) this.z = 0
        else this.z = z
        this.identifier = identifier
    }
}