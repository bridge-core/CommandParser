import { Command } from "./Command";

export default class Give extends Command {
    run(args: string[]): boolean {
        // args[0]: command, args[1]: selector, args[2]: item, args[3]: quantity
        let successful: boolean = true
        let entity = this.world.getEntitiesFromSelector(args[1])
        entity.forEach( ent => {
            ent.inventory
        })
        return successful
    }

}