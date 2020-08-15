import World from "./World";
import { IScore } from "./Scoreboard";
import { isUndefined } from "util";

export default class Entity {
    
    protected world: World
    protected name: String | undefined
    protected type: String | undefined
    protected scores: Map<String, Number>
    protected tags: Set<String>

    constructor(world: World) {
        this.world = world
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
    constructor(name: String, world: World) {
        super(world)
        this.name = name
    }

    setName(name: String) {
        throw new Error("can't assign a new name to a player!")
    }
}