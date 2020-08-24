export interface Coords {
    x?: number,
    y?: number,
    z?: number
}

export class Slot {
    itemId: String | null = null
    accepts: Array<String> = new Array<String>()
    count: number = 0
    constructor() {

    }

    addItem(itemId: String, count: number) {
        if (this.accepts.length > 0) {
            if (!this.accepts.includes(itemId)) throw new Error(`this slot only accepts ${this.accepts.toString()}`)
        }
    }
}

export class Inventory {

}

export enum InvType {
    player = 0,
    monster = 1,
    villager = 2
}