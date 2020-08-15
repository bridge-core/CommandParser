import { Command, ICommand } from "./Command"
import { RunArray } from "./RunTime"


export default class Function {

    commandList: Array<Array<string>>

    constructor(commandList: string) {
        this.commandList = buildCommandListFrom(commandList)
    }

    Run() {
        this.commandList.forEach( command => {
           RunArray(command) 
        })
    }
}

export function FunctionFromObj(data: ICommand) {

}

export function buildCommandListFrom(commandString: string) {
    let result: Array<Array<string>>
    result = []
    let tmp = commandString.split("\n")
    tmp.forEach(line => {
        result.push( line.split(" ") )
    })
    return result
}