import Item, { ItemType } from "./Item";
import { Slot } from "./Common";

export default class Inventory {

    protected slots: Map<number, Slot> | null = null

    constructor() {
        this.slots = this.makeSlots()
    }


    setItem(slot: number, item: Item, count: number = 1): number {
        let overflow: number = 0
        // check if is a valid slot
        if (!this.slots?.has(slot)) {
            throw new Error(`invalid slot ${slot}`)
        }
        // handle normal operations
        if (this.slots.get(slot)?.count + count < this.slots.get(slot)?.item?.maxAllowedQuantity) {
            this.slots.get(slot)?.addItem(item, count)
        } else {
            // handle operations with overflow (ex. add 45 items to a stack that already has 30 items)
            overflow = this.slots.get(slot)?.count + count - this.slots.get(slot)?.item?.maxAllowedQuantity
            this.slots.get(slot)?.count = this.slots.get(slot)?.item?.maxAllowedQuantity
        }
        // return the overflow
        return overflow
    }

    getFirstAvaliable(item: String | null = null): number | null {
        let index: number | null = null
        // search for the first free slot
        if (item === null) {
            for (let i=0; i<35; i++) {
                if ( this.slots?.get(i).item?.id === null ) index = i
            }
        }
        // search for the first slot that has the same type and isn't full
        for (let i = 0; i < 35; i++) {
            if (this.slots?.get(i)?.item?.id == item &&
                this.slots?.get(i)?.count < this.slots?.get(i)?.item?.maxAllowedQuantity) index = i
        }
        // return found slots
        return index
    }

    protected makeSlots(): Map<number, Slot> {
        return new Map<number, Slot>()
    }

}

export class PlayerInventory extends Inventory {

    protected makeSlots(): Map<number, Slot> {
        let slots = new Map<number, Slot>()
        for (let i = 0; i<35; i++) {
            slots.set(i, new Slot() )
        }
        slots.set(100, new Slot(ItemType.boots) )
        slots.set(101, new Slot(ItemType.leggins))
        slots.set(102, new Slot(ItemType.chestplate))
        slots.set(103, new Slot(ItemType.helmet))
        slots.set(-106, new Slot())
        return slots
    }

}

export enum InvType {
    player = 0,
    monster = 1,
    villager = 2
}