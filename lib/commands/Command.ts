import Entity from "../Entity";

export default abstract class Command {

    // if command fails, returns false
    abstract run(args: Array<string>, invoker: Entity): boolean
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