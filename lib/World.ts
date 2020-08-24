import {  } from './RunTime'
import Block from './Block'
import Entity, { Player } from './Entity'
import { IScore } from './commands/Scoreboard'
import { ISelector } from './Command'
import Selector from './Selector'
import { Gamerules, GenericGamerule } from './Gamerules'
import { Coords } from './Common'

export default class World {
    
    private entities = new Map<string, Entity>()
    private blocks = new Map<string, Block>()
    private scoreboards = new Array<String>()
    private functions = {}
    private commandStack = []
    private gamerules: Record<string, GenericGamerule<number | boolean>>
    protected spawnPoint: Coords = { x: 0, y:0, z:0 }

    constructor() {
        this.functions = {}
        this.commandStack = []
        this.gamerules = Gamerules
    }

    GetWorldAsString() {
        // returns the world as JSON string, with all the arrays that compose a world
        return JSON.stringify({'entities': this.entities, 'blocks': this.blocks, 'scoreboards': this.scoreboards})
    }

    placeBlock(x: number, y: number, z: number, type: string) {
        // place a block at XYZ
        this.blocks.set(`${x}.${y}.${z}`, new Block(type, { x, y, z }) )
    }

    getBlock( x: number, y: number, z: number ) {
        // get the block at XYZ
        return this.blocks.get(`${x}.${y}.${z}`)
    }

    setEntityScore(selector: Selector, score: IScore) {
        if ( score.name in this.scoreboards ) {

        }
    }

    getEntitiesFromSelector(selector: String, runner?: Entity): Array<Entity> {
        /*
        * returns the entities specified by SELECTOR as an array.
        * if no entities correspond to the selector an empty array | null is returned.
        * TODO: decide if to return null or an empty array
        */
        let entities = new Array<Entity>()
        let selObj = new Selector(selector, runner)
        selector.split(",").forEach( str => {
            
        })
        return entities
    }

    playerJoin(name: string) {
        /* make a player join the world
        * there's always at least one player in the world
        */
        this.entities.set(name, new Player(name, this, this.spawnPoint) )
    }

    getRule(name: string) {
        return this.gamerules[name]
    }

    setRule(name: string, data: boolean | number) {
        this.gamerules[name].value = data
    }



    private setData(entities: Map<string, Entity>, blocks: Map<string, Block>) {
        this.entities = entities
        this.blocks = blocks
    }

    static GetWorldFromString(data: string) {
        let obj: World = JSON.parse(data)
        let world: World = new World()
        world.setData(obj.entities, obj.blocks)
        return world
        
    }
    

}
