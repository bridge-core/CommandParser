import Command from "./Command"
import World from "../World"
import Entity from "../Entity"

export interface IScore {
    name: string
    value: number
}

export class Scoreboard extends Command {

    run(args: string[], invoker: Entity): boolean {
        
        let successful: boolean = true
        World.instance.getEntitiesFromSelector(args[1])
        return successful
    }
}