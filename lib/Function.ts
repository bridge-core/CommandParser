import { ICommand } from "./commands/Command"
import RunTime from "./RunTime"


export default class Function {

    commandList: Array<Array<string>>

    constructor(text: string) {
        this.commandList = buildCommandListFrom(text)
    }

    Run(runtime: RunTime) {
        this.commandList.forEach( command => {
            // RunArray can only be called on the Runtime
            // RunArray(command) 
        })
    }
}

export function FunctionFromObj(data: ICommand) {

}

export function buildCommandListFrom(commandString: string) {
    let result: Array<Array<string>>
    result = []
    // split into lines
    let tmp = commandString.split("\n")
    tmp.forEach(line => {
        // split into another array
        result.push( line.split(" ") )
    })
    return result
}