import World from "./World"

export abstract class Command {

    world: World

    constructor(world: World) {
        this.world = world
    }
    // if command fails, returns false
    abstract run(args: Array<string>): boolean
}

export interface ICommand {
    command_name: string
    onApply: CallableFunction
}

export interface ISelector {
    type: null
}


export enum EEntType {
    allPlayer = '@a',
    randomPlayer = '@r',
    nearestPlayer = '@p',
    entity = '@e'
}