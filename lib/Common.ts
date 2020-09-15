import Item, { ItemType, typeToString } from "./Item"
import { isNull, isUndefined } from "util"
import { type } from "os"

export interface Coords {
    x?: number,
    y?: number,
    z?: number
}

export class Slot {

    item: Item | null = null
    accepts: Array<String> = new Array<String>()
    itemType: ItemType = ItemType.everything
    count: number = 0

    constructor(accepts: Array<String> | ItemType | undefined = undefined) {
        if (accepts !== undefined ) {
            // type check
            if ( typeof accepts === typeof ItemType ) {
                this.itemType = accepts
            } else {
                this.accepts = accepts
            }
        }
    }

    addItem(item: Item | null, count: number) {
        if ( item !== null ) {
            // if we have an item and there's a item parameter, check if they are the same type
            if( this.item !== null) {
                if ( this.item.id == item.id ) {
                    // they are
                    this.count += count
                } else {
                    throw new Error('this slot already has a item of different type')
                }
            } else {
                // we don't have items stored
                // check if the item is allowed
                if (this.accepts.length > 0) {
                    if (!this.accepts.includes(item.id)) throw new Error(`this slot only accepts ${this.accepts.toString()}`)
                } else if (this.itemType != item.type) {
                    throw new Error(`this slot only accepts ${typeToString(this.itemType)}`)
                }
                this.item = item
                this.count = count
            }
        } else {
            this.count += count
        }
    }
}

