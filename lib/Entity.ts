import World from "./World";
import { IScore } from "./commands/Scoreboard";
import { isUndefined } from "util";
import timer from "timers";
import { Coords } from "./Common";
import Inventory, { InvType, PlayerInventory } from "./Inventory";

export default class Entity {
    
    protected name: String | undefined
    protected type: String | undefined
    protected scores: Map<String, Number>
    protected tags: Set<String>
    protected health: number = 20
    protected coords: Coords
    public inventory: Inventory | undefined
    public alive: boolean = true

    constructor(coords: Coords) {
        this.coords = coords
        this.scores = new Map<String, Number>()
        this.tags = new Set<String>()

    }

    setCoords(coords: Coords): void {
        this.coords = coords
    }

    getCoords(): Coords {
        return this.coords
    }

    setName(name: String) {
        if ( name.length > 0) this.name = name
        else throw new Error('the name must have at least one character')
    }

    getName() {
        if (this.name === undefined ) return this.type
        else return this.name
    }

    setScore(score: IScore) {
        this.scores.set(score.name, score.value)
    }

    getScoreValue(name: string) {
        return this.scores.get(name)
    }

    addTag(tag: String) {
        if ( this.tags.has(tag) ) throw Error('this entity already has tag '+tag)
        else this.tags.add(tag)
    }

    getTags() {
        return this.tags
    }

    removeTag(tag: String) {
        if (! this.tags.has(tag) ) throw Error("this entity doesn't have the tag " + tag)
        else this.tags.delete(tag)
    }

    hasTag(tag: string) {
        return this.tags.has(tag)
    }


    async damage(damage: number) {
        if (damage > this.health) {
            this.kill()
        } else {
            this.health = this.health - damage
        }
    }

    kill() {
        this.alive = false
    }

}

export class Player extends Entity {

    private respawnTime: number = 2
    private spawnPoint: Coords
    public inventory = new PlayerInventory()
    private timerID: NodeJS.Timeout | undefined

    constructor(name: String, coords: Coords) {
        super(coords)
        this.name = name
        this.spawnPoint = coords
    }

    // can't change name to a player
    setName(name: String) {
        throw new Error("can't assign a new name to a player!")
    }

    // remove the if as players always have a name
    getName() {
        return this.name
    }

    async damage(damage: number) {
        if ( damage > this.health ) {
            this.kill()
        } else {
            this.health = this.health - damage
        }
    }

    kill() {
        this.alive = false
        if (World.instance.getRule('doImmediateRespawn').value === false) {
            this.timerID = timer.setTimeout(this.respawn, this.respawnTime)
        } else {
            this.respawn()
        }
    }

    private respawn() {
        timer.clearTimeout(this.timerID)
        this.health = 20
        this.coords = this.spawnPoint
        this.alive = true
    }
}


export enum EntityType {
    item = 0,
    monster = 1,
    player = 2,
    mob = 3
}