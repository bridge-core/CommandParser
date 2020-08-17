import { Command } from "./Command"

export interface IScore {
    name: string
    value: number
}

export class Scoreboard extends Command {

    run(args: string[]): boolean {
        
        let successful: boolean = true
        this.world.getEntitiesFromSelector(args[1])
        return successful
    }
}