import World from "./World";
import { IScore } from "./Scoreboard";

export default class Entity {
    
    private world: World
    private scores: Map<String, Number>
    private tags: Array<String>

    constructor(world: World) {
        this.world = world
        this.scores = new Map<String, Number>()
        this.tags = new Array<String>()
    }

    setScore(score: IScore) {
        this.scores.set(score.name, score.value)
    }

    getScoreValue(name: string) {
        return this.scores.get(name)
    }

    addTag(tag: String) {
        if ( this.tags.includes(tag) ) throw Error('this entity already has tag '+tag)
        else this.tags.push(tag)
    }

    getTags() {
        return this.tags
    }

    removeTag(tag: String) {
        if (! this.tags.includes(tag) ) throw Error("this entity doesn't have tag " + tag)
        else this.tags.push(tag)
    }

}

export class Player extends Entity {

}