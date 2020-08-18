export const Gamerules: object = {

    commandBlocksEnabled: makeGamerule(true, 'Whether command blocks should be enabled in-game'),
    commandBlockOutput: makeGamerule(true, 'Whether command blocks should notify admins when they perform commands'),
    doDaylightCycle: makeGamerule(true, 'Whether the daylight cycle and moon phases progress'),
    doEntityDrops: makeGamerule(true, 'Whether entities that are not mobs should have drops'),

}

interface BoolGameRule {
    description: String
    default: boolean
    value: boolean
}

interface IntGameRule {
    description: String
    default: number
    value: number
}

// functions to simplify the gamerule creation

function makeGamerule(defVal: number | boolean, desc: String) {
    // use the appropriate function for creating the gamerule
    if ( typeof defVal === 'number') {
        return makeIntGamerule(defVal, desc)
    } else if (typeof defVal === 'boolean') {
        return makeBoolGamerule(defVal, desc)
    } else {
        throw new Error(`unknown defVal type "${typeof defVal}"`)
    }
}

function makeBoolGamerule(defVal: boolean, desc: String) {
    let rule: BoolGameRule = {
        default: defVal,
        value: defVal,
        description: desc
    }
    return rule
}

function makeIntGamerule(defVal: number, desc: String) {
    let rule: IntGameRule = {
        default: defVal,
        value: defVal,
        description: desc
    }
    return rule
}

