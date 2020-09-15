import Command from "./Command";
import World from "../World";
import { Items } from "../Items";
import Entity, { EntityType } from "../Entity";

export default class Give extends Command {
    run(args: string[], invoker: Entity ): boolean {
        // args[0]: command, args[1]: selector, args[2]: item, args[3]: quantity
        let successful: boolean = true
        let entities = World.instance.getEntitiesFromSelector(args[1])
        let overflow = Number.parseInt(args[3])
        entities.forEach( ent => {
            do {
                // get first slot available on the ent's inventory
                let index = ent.inventory.getFirstAvaliable(args[2])
                // set the item + get overflow
                if (!index === null) overflow = ent.inventory?.setItem(index, Items[args[2]], overflow)
                else {
                    // spawn items entities
                    World.instance.spawn(EntityType.item, invoker.getCoords(), { 'count': overflow, 'item': Items[args[2]]})
                    overflow = 0
                }
                // if we have an overflow repeat
            } while (overflow != 0)
        })
        return successful
    }

}