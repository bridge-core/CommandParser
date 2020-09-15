import { Command, ICommand } from "./Command";
import World from "./World";
import { Scoreboard } from "./commands/Scoreboard";

export default class RunTime {
    world = new World()
    commands = {
        'scoreboard': new Scoreboard()
    }

    RunArray(arr: Array<string>)  {
        arr.forEach( command => {
            
        })
    }
}