import Entity from "./Entity"
import { Coords } from "./Common"
import { isUndefined } from "util"

export default class Selector {
    entType: String | undefined
    entName: String | undefined
    entTarget: String | undefined
    searchRadius: String | undefined
    entCoord: Coords | undefined

    constructor(stringSelector: String, runner: Entity | undefined) {
        if (! stringSelector.startsWith('@') ) throw new ParseError('missing target!')
        let targetSel = stringSelector.substring(0,2)
        let argumentSelector = stringSelector.substring(3, stringSelector.length-1)
        let args = argumentSelector.split(',')
        args.forEach(arg => {
            let i = arg.split('=')
            if (i[0] == 'name') this.entName = i[1]
            if (i[0] == 'type') this.entType = i[1]
            if (i[0] == 'r') this.searchRadius = i[1]
            if (i[0] == 'x') {
                if (isUndefined(this.entCoord)) this.entCoord = {}
                this.entCoord.x = Number(i[1])
            }
            if (i[0] == 'y') {
                if (isUndefined(this.entCoord)) this.entCoord = {}
                this.entCoord.y = Number(i[1])
            }
            if (i[0] == 'z') {
                if (isUndefined(this.entCoord)) this.entCoord = {}
                this.entCoord.z = Number(i[1])
            }
            if (i[0] == '') this.entName = i[1]
            if (i[0] == '') this.entName = i[1]
            if (i[0] == '') this.entName = i[1]
            if (i[0] == '') this.entName = i[1]
        })

    }

}

class ParseError extends Error {}