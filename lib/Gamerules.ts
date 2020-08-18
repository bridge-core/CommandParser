export const Gamerules: object = {

    commandBlocksEnabled: makeGamerule(true, 'Whether command blocks should be enabled in-game'),
    commandBlockOutput: makeGamerule(true, 'Whether command blocks should notify admins when they perform commands'),
    doDaylightCycle: makeGamerule(true, 'Whether the daylight cycle and moon phases progress'),
    doEntityDrops: makeGamerule(true, 'Whether entities that are not mobs should have drops'),
    doFireTick: makeGamerule(true, 'Whether fire should spread and naturally extinguish'),
    doInsomnia: makeGamerule(true, 'Whether phantoms can spawn in the nighttime'),
    doImmediateRespawn: makeGamerule(false, 'Players respawn immediately without showing the death screen'),
    doMobLoot: makeGamerule(true, 'Whether mobs should drop items'),
    doMobSpawning: makeGamerule(true, 'Whether mobs should naturally spawn. Does not affect monster spawners.'),
    doTileDrops: makeGamerule(true, 'Whether blocks should have drops'),
    doWeatherCycle: makeGamerule(true,'Whether the weather can change naturally. The /weather command can still change weather.'),
    drowningDamage: makeGamerule(true, 'Whether the player should take damage when drowning'),
    fallDamage: makeGamerule(true, 'Whether the player should take fall damage'),
    fireDamage: makeGamerule(true, 'Whether the player should take fire damage'),
    keepInventory: makeGamerule(false, 'Whether the player should keep items and experience in their inventory after death'),
    maxCommandChainLength: makeGamerule(65536, 'Determines the number at which the chain command block acts as a "chain".'),
    mobGriefing: makeGamerule(true, 'Whether mobs should be able to change blocks and whether mobs can pick up items, which also disables bartering. This also affects the capability of zombie-like creatures to pathfind to turtle eggs.'),
    naturalRegeneration: makeGamerule(true, "Whether the player can regenerate health naturally if their hunger is full enough (doesn't affect external healing)"),
    pvp: makeGamerule(true, 'Whether the player can fight with other players'),
    randomTickSpeed: makeGamerule(1, 'How often a random block tick occurs per chunk section per game tick. 0 disables random ticks, higher numbers increase random ticks. Setting to a high integer results in high speeds of decay and growth'),
    sendCommandFeedback: makeGamerule(true, 'Whether the feedback from commands executed by a player should show up in chat. Also affects the default behavior of whether command blocks store their output text'),
    showCoordinates: makeGamerule(true, "Whether the player's coordinates are displayed"),
    showDeathMessages: makeGamerule(true, "Whether death messages are put into chat when a player dies. Also affects whether a message is sent to the pet's owner when the pet dies."),
    spawnRadius: makeGamerule(5, 'The number of blocks outward from the world spawn coordinates that a player spawns in when first joining a server or when dying without a personal spawnpoint.'),
    tntExplodes: makeGamerule(true, 'Whether TNT explodes after activation'),
    showTags: makeGamerule(true, 'Hides the "Can place on" and "Can destroy" block lists from item lore.'),
}

interface BoolGameRule {
    description: String
    default: boolean
    value: boolean
}

interface IntGameRule {
    description: String
    max: number | undefined
    default: number
    value: number
}

// functions to simplify the gamerule creation

function makeGamerule(defVal: number | boolean, desc: String, maxVal?: number | undefined) {
    // use the appropriate function for creating the gamerule
    if ( typeof defVal === 'number') {
        return makeIntGamerule(defVal, desc, maxVal)
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

function makeIntGamerule(defVal: number, desc: String, maxVal: number | undefined) {
    let rule: IntGameRule = {
        default: defVal,
        value: defVal,
        max: maxVal,
        description: desc
    }
    return rule
}

