import {  } from './RunTime'
import Block from './Block'
import Entity, { Player } from './Entity'
import { IScore } from './Scoreboard'

export default class World {
    
    private entities: Map<String, Entity> 
    private blocks: Map<String, Block>
    private scoreboards: Array<String>
    private functions = {}
    private commandStack = []

    constructor() {
        this.entities = new Map<String, Entity>()
        this.blocks = new Map<String, Block>()
        this.scoreboards = new Array<String>()
        this.functions = {}
        this.commandStack = []
    }

    GetWorldAsString() {
        return JSON.stringify({'entities': this.entities, 'blocks': this.blocks, 'scoreboards': this.scoreboards})
    }

    placeBlock(x: string, y: string, z: string, type: string) {
        this.blocks.set( x.concat(y).concat(z), new Block(type) )
    }

    getBlock( x: string, y: string, z: string ) {
        return this.blocks.get( x.concat(y).concat(z) )
    }

    setEntityScore(selector: ISelector, score: IScore) {
        if ( score.name in this.scoreboards ) {

        }
    }

    playerJoin(name: String) {
        this.entities.set(name, new Player(name, this) )
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
