import { Spaceship } from "./export";

// importando uma biblioteca externa
// necessário usar "npm i -D @types/lodash", pois a biblioteca não tem tipos
// para importar, usa "*"
import * as lodash from "lodash"

interface BattleSpaceship extends Spaceship {
    weapons: number
}

let xwing: BattleSpaceship = {
    name: "X-Wing",
    pilot: "Luke Skywalker",
    weapons: 10
}

console.log(lodash.camelCase(xwing.pilot))
// Output => 'lukeSkywalker'
