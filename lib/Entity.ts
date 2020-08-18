import World from "./World";
import { IScore } from "./Scoreboard";
import { isUndefined } from "util";
import timer from "timers";
import { Coords } from "./Common";

export default class Entity {
    
    protected world: World
    protected name: String | undefined
    protected type: String | undefined
    protected scores: Map<String, Number>
    protected tags: Set<String>
    protected health: number = 20
    protected coords: Coords

    constructor(world: World, coords: Coords) {
        this.world = world
        this.coords = coords
        this.scores = new Map<String, Number>()
        this.tags = new Set<String>()
    }

    setName(name: String) {
        this.name = name
    }

    getName() {
        if (isUndefined(this.name) ) return this.type
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
        if (! this.tags.has(tag) ) throw Error("this entity doesn't have tag " + tag)
        else this.tags.delete(tag)
    }



}

export class Player extends Entity {

    private respawnTime: number = 0
    private spawnPoint: Coords
    public alive: boolean = true

    constructor(name: String, world: World, coords: Coords) {
        super(world, coords)
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
        if (this.world.getRule('doImmediateRespawn') == false) {
            timer.setTimeout(this.respawn, this.respawnTime)
        } else {
            this.respawn()
        }
    }

    respawn() {
        this.health = 20
        this.coords = this.spawnPoint
        this.alive = true
    }
}