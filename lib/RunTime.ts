import { Command, Scoreboard, ICommand } from "./Command";
import World from "./World";

export default class RunTime {
    world = new World()
    commands = {
        "scoreboard": new Scoreboard(this.world)
    }

    RunArray(arr: Array<string>)  {
    
    }
}