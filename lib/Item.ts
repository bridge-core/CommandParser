
export default class Item {

    id: String
    maxAllowedQuantity: number
    type: ItemType

    constructor(id: String, maxQuantity: number = 64, type: ItemType = ItemType.none) {
        this.id = id
        this.maxAllowedQuantity = maxQuantity
        this.type = type
    }

}

export function typeToString(type: ItemType): String {
    let stringForm: String = 'none'
    switch(type) {
        case -2:
            stringForm = 'none'
            break
        case -1:
            stringForm = 'everything'
            break
        case 0:
            stringForm = 'boots'
            break
        case 1:
            stringForm = 'leggins'
            break
        case 2:
            stringForm = 'chestplate'
            break
        case 3:
            stringForm = 'helmet'
            break
    }
    return stringForm
} 


export enum ItemType {
    none = -2,
    everything = -1,
    boots = 0,
    leggins = 1,
    chestplate = 2,
    helmet = 3,
    fuel = 4,
}