import {  } from './RunTime'
import Block from './Block'
import Entity, { Player } from './Entity'
import { IScore } from './Scoreboard'
import { ISelector } from './Command'
import Selector from './Selector'
import Gamerules from './Gamerules'

export default class World {
    
    private entities: Map<String, Entity> 
    private blocks: Map<String, Block>
    private scoreboards: Array<String>
    private functions = {}
    private commandStack = []
    private gamerules: Gamerules

    constructor() {
        this.entities = new Map<String, Entity>()
        this.blocks = new Map<String, Block>()
        this.scoreboards = new Array<String>()
        this.functions = {}
        this.commandStack = []
        this.gamerules = new Gamerules()
    }

    GetWorldAsString() {
        // returns the world as JSON string, with all the arrays that compose a world
        return JSON.stringify({'entities': this.entities, 'blocks': this.blocks, 'scoreboards': this.scoreboards})
    }

    placeBlock(x: string, y: string, z: string, type: string) {
        // place a block at XYZ
        this.blocks.set( x.concat(y).concat(z), new Block(type) )
    }

    getBlock( x: string, y: string, z: string ) {
        // get the block at XYZ
        return this.blocks.get( x.concat(y).concat(z) )
    }

    setEntityScore(selector: Selector, score: IScore) {
        if ( score.name in this.scoreboards ) {

        }
    }

    getEntitiesFromSelector(selector: String, runner: Entity | undefined): Array<Entity> {
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

    playerJoin(name: String) {
        /* make a player join the world
        * there's always at least one player in the world
        */
        this.entities.set(name, new Player(name, this) )
    }

    getRule(name: String) {
        return this.gamerules[name]
    }

    setRule(name: string, data: boolean | number) {
        this.gamerules[name].value = data
    }



    private setData(entities: Map<String, Entity>, blocks: Map<String, Block>) {
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
